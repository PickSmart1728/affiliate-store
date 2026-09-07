import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  Clock, 
  ChevronRight, 
  Share2, 
  ArrowLeft, 
  Bookmark, 
  CheckCircle2, 
  Info, 
  Sparkles,
  ExternalLink,
  ShoppingBag,
  Zap,
  HelpCircle,
  ChevronDown,
  Tag
} from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import BlogProductCallout from "../components/BlogProductCallout";
import BlogCard from "../components/BlogCard";
import SEOHead from "../components/SEOHead";

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setOpenFaqIndex(null);
  }, [slug]);

  if (!post) {
    return (
      <div className="container blog-not-found">
        <h2>Article Not Found</h2>
        <p>The guide you are looking for doesn't exist or has moved.</p>
        <Link to="/blog" className="back-to-blog-btn">
          <ArrowLeft size={16} />
          <span>Back to All Guides</span>
        </Link>
      </div>
    );
  }

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || true))
    .slice(0, 2);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Google Schema.org JSON-LD Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://picksmart.store/blog/${post.slug}#article`,
        "headline": post.title,
        "description": post.excerpt,
        "image": post.coverImage,
        "datePublished": post.publishedDate || "2026-03-01",
        "dateModified": post.publishedDate || "2026-03-01",
        "author": {
          "@type": "Organization",
          "name": "PickSmart Team",
          "url": "https://picksmart.store"
        },
        "publisher": {
          "@type": "Organization",
          "name": "PickSmart",
          "logo": {
            "@type": "ImageObject",
            "url": "https://picksmart.store/favicon.svg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://picksmart.store/blog/${post.slug}`
        }
      },
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `https://picksmart.store/blog/${post.slug}#faq`,
              "mainEntity": post.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ]
        : [])
    ]
  };

  return (
    <>
      {/* Dynamic SEO Meta & Rich Snippet Injection */}
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`https://picksmart.store/blog/${post.slug}`}
        ogImage={post.coverImage}
        ogType="article"
        keywords={post.seoKeywords || post.tags}
        schemaData={schemaData}
      />

      <article className="single-blog-page">
        {/* Breadcrumb Bar */}
        <div className="blog-breadcrumb-container container">
          <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog">Guides & Blog</Link>
            <ChevronRight size={14} />
            <span className="current-crumb">{post.category}</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="blog-article-header container">
          <div className="article-header-meta">
            <span className="article-category-badge">{post.category}</span>
            {post.budgetBadge && (
              <>
                <span className="meta-sep">•</span>
                <span className="article-budget-badge">
                  <Tag size={12} />
                  {post.budgetBadge}
                </span>
              </>
            )}
            <span className="meta-sep">•</span>
            <span className="article-meta-item">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          <h1 className="blog-article-title">{post.title}</h1>
          <p className="blog-article-subtitle">{post.excerpt}</p>

          <div className="blog-article-author-bar">
            <div className="author-info-group">
              <div className="article-author-brand-badge" aria-hidden="true">
                <Zap size={18} />
              </div>
              <div>
                <div className="author-name-bold">PickSmart Team</div>
                <div className="author-role-sub">Curated Guide</div>
              </div>
            </div>

            <div className="article-actions-group">
              <button onClick={handleShare} className="share-article-btn" title="Share this article">
                <Share2 size={16} />
                <span>Share Guide</span>
              </button>
            </div>
          </div>

          <div className="blog-hero-image-wrap">
            <img
              src={post.coverImage}
              alt={post.title}
              className="blog-hero-image"
            />
          </div>
        </header>

        {/* Article Body Content */}
        <div className="blog-article-body-wrapper container">
          <div className="article-layout">
            {/* Main Reading Column */}
            <div className="article-main-col">
              {/* Quick Verdict Callout */}
              {post.quickVerdict && (
                <div className="quick-verdict-box">
                  <div className="verdict-header">
                    <Sparkles size={18} />
                    <span>The Quick Verdict</span>
                  </div>
                  <p className="verdict-text">{post.quickVerdict}</p>
                </div>
              )}

              {/* Sections */}
              <div className="article-content-flow">
                {post.sections.map((section, idx) => (
                  <section key={idx} className="article-section-block">
                    <h2 className="section-heading">{section.heading}</h2>
                    
                    {section.content.split("\n\n").map((para, pIdx) => (
                      <p key={pIdx} className="article-paragraph">
                        {para}
                      </p>
                    ))}

                    {/* Embedded Product Card if section links to a product */}
                    {section.productId && (
                      <BlogProductCallout
                        productId={section.productId}
                        note={section.productNote}
                      />
                    )}
                  </section>
                ))}
              </div>

              {/* On-Page Interactive FAQ Section (Google PAA Snippet Booster) */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="article-faq-container">
                  <div className="faq-section-header">
                    <HelpCircle size={20} className="faq-header-icon" />
                    <h3>Frequently Asked Questions</h3>
                  </div>
                  <div className="faq-accordion-list">
                    {post.faqs.map((faq, fIdx) => {
                      const isOpen = openFaqIndex === fIdx;
                      return (
                        <div 
                          key={fIdx} 
                          className={`faq-accordion-item ${isOpen ? "faq-open" : ""}`}
                        >
                          <button 
                            className="faq-question-btn" 
                            onClick={() => toggleFaq(fIdx)}
                            aria-expanded={isOpen}
                          >
                            <span>{faq.question}</span>
                            <ChevronDown 
                              size={18} 
                              className={`faq-chevron ${isOpen ? "faq-chevron-rotated" : ""}`} 
                            />
                          </button>
                          {isOpen && (
                            <div className="faq-answer-content">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tags Cloud */}
              <div className="article-tags-wrap">
                <span className="tags-label">Tags:</span>
                <div className="tags-list">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="article-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Affiliate & Editorial Transparency */}
              <div className="blog-disclosure-card">
                <Info size={20} className="disclosure-icon" />
                <div>
                  <h4>PickSmart Editorial & Affiliate Transparency</h4>
                  <p>
                    PickSmart is reader-supported. Every product in this guide has been independently researched and evaluated by our team. If you click on links and buy on Amazon, we may earn an affiliate commission at zero additional cost to you. Thank you for supporting our work!
                  </p>
                </div>
              </div>

              {/* Author Bio Box */}
              <div className="author-bio-card">
                <div className="bio-brand-badge" aria-hidden="true">
                  <Zap size={24} />
                </div>
                <div className="bio-details">
                  <h3>Curated by the PickSmart Team</h3>
                  <p>
                    Specializing in tech setup design, everyday carry, and consumer ergonomics. Our mission is to test, compare, and curate products that make your everyday workflow smoother.
                  </p>
                  <div className="bio-links">
                    <a href="https://www.youtube.com/channel/UCXB2J4q1a1GvFAS7Lgw2mug" target="_blank" rel="noopener noreferrer">
                      YouTube Channel
                    </a>
                    <span>•</span>
                    <a href="https://www.instagram.com/picksmart_1728/" target="_blank" rel="noopener noreferrer">
                      Instagram (@picksmart_1728)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="article-sidebar">
              <div className="sidebar-sticky-block">
                <div className="sidebar-card">
                  <h3>Explore PickSmart Store</h3>
                  <p>Looking for more curated recommendations across all categories?</p>
                  <Link to="/" className="sidebar-store-btn">
                    <ShoppingBag size={16} />
                    <span>Browse Storefront</span>
                  </Link>
                </div>

                <div className="sidebar-card promo-card">
                  <span className="promo-badge">Stay Connected</span>
                  <h4>Follow Our Curations</h4>
                  <p>Check out our bite-sized video demos on Instagram and YouTube.</p>
                  <div className="sidebar-social-links">
                    <a 
                      href="https://www.instagram.com/picksmart_1728/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="sidebar-social-pill"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://www.youtube.com/channel/UCXB2J4q1a1GvFAS7Lgw2mug" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="sidebar-social-pill"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Related Guides Section */}
        {relatedPosts.length > 0 && (
          <section className="related-guides-section">
            <div className="container">
              <div className="related-guides-header">
                <h2>You Might Also Like</h2>
                <Link to="/blog" className="view-more-link">
                  View All Guides <ChevronRight size={16} />
                </Link>
              </div>
              <div className="related-guides-grid">
                {relatedPosts.map((rPost) => (
                  <BlogCard key={rPost.id} post={rPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}

export default BlogPost;
