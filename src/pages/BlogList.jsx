import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Sparkles, BookOpen, Filter, Mail, CheckCircle2, ArrowRight, Zap, Tag } from "lucide-react";
import { blogPosts, BLOG_CATEGORIES } from "../data/blogPosts";
import BlogCard from "../components/BlogCard";
import SEOHead from "../components/SEOHead";

function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const regularPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const BREVO_FORM_URL = "https://724c9646.sibforms.com/serve/MUIFABt47PobhnAhVBPS65kMyx-LEqhVW8g13G-Ymq_ifCjWcjjrtyxKW712PsDXbWmPf3jp4MtoNNjZBokZSNUIlghryAWpsLlWXyLO6fFNSVvHCak-0ucpSvp04ohAQB0EtDbGTNQIMylVHGF0boP04xQImht_An9W0uuVIRIw6QX9neUDLoKMKp8nbvW7Y3yY8QzBTxeDJ4Qltw==";

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("EMAIL", newsletterEmail);

      await fetch(BREVO_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });

      setNewsletterSubscribed(true);
    } catch (err) {
      console.error("Brevo subscription error:", err);
      // Still show success to the user gracefully
      setNewsletterSubscribed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Smart Buying Guides & Gadget Reviews (2026)"
        description="Explore in-depth buying guides, best gadgets under ₹500, smart home problem solvers, and desk setups on PickSmart."
        canonicalUrl="https://picksmart.store/blog"
        ogType="website"
        keywords={["buying guides", "best gadgets under 500", "amazon india finds", "tech recommendations", "smart home gadgets"]}
      />

      <div className="blog-page">
        {/* Blog Hero Header */}
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-badge">
              <Sparkles size={14} />
              <span>PickSmart Editorial Hub</span>
            </div>
            <h1 className="blog-hero-title">Smart Buying Guides & Tech Advice</h1>
            <p className="blog-hero-subtitle">
              Curated reviews, minimalist workspace setups, and honest gear recommendations to help you pick smarter and save time.
            </p>

            {/* Search Bar & Category Filter Strip */}
            <div className="blog-controls-wrapper">
              <div className="blog-search-box">
                <Search size={18} className="blog-search-icon" />
                <input
                  type="text"
                  placeholder="Search buying guides, topics, or gear..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="blog-search-input"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="blog-search-clear"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="blog-category-pills">
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`blog-cat-pill ${selectedCategory === cat ? "active" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="blog-content-section container">
          {filteredPosts.length === 0 ? (
            <div className="blog-empty-state">
              <BookOpen size={48} className="empty-icon" />
              <h3>No guides found matching your search</h3>
              <p>Try searching for different keywords or reset your category filter.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="reset-filters-btn"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              {/* Featured Post Card (if no search filter applied or match found) */}
              {featuredPost && (
                <div className="blog-featured-wrap">
                  <div className="section-label">
                    <span>★ Featured Guide</span>
                  </div>
                  <div className="featured-card">
                    <div className="featured-card-image-wrap">
                      <img
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        className="featured-card-image"
                      />
                      <span className="featured-cat-tag">{featuredPost.category}</span>
                    </div>
                    <div className="featured-card-content">
                      <div className="featured-meta">
                        <span className="featured-read-time">{featuredPost.readTime}</span>
                        {featuredPost.budgetBadge && (
                          <>
                            <span>•</span>
                            <span className="featured-budget-badge">
                              <Sparkles size={12} />
                              {featuredPost.budgetBadge}
                            </span>
                          </>
                        )}
                      </div>
                      <h2 className="featured-title">
                        <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                      </h2>
                      <p className="featured-excerpt">{featuredPost.excerpt}</p>
                    
                    <div className="featured-footer">
                      <div className="featured-author">
                        <div className="author-brand-badge" aria-hidden="true">
                          <Zap size={15} />
                        </div>
                        <div>
                          <p className="author-name">PickSmart Team</p>
                          <p className="author-role">Curated Guide</p>
                        </div>
                      </div>

                      <Link to={`/blog/${featuredPost.slug}`} className="read-featured-btn">
                        <span>Read Full Guide</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Remaining Grid */}
            {regularPosts.length > 0 && (
              <div className="blog-grid-wrap">
                <div className="section-label">
                  <span>More Articles & Comparisons</span>
                </div>
                <div className="blog-grid">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Newsletter Subscription Box */}
        <div className="blog-newsletter-banner">
          <div className="newsletter-content">
            <div className="newsletter-icon-wrap">
              <Mail size={28} />
            </div>
            <div className="newsletter-text">
              <h3>Get Curated Deals & Smart Buying Guides</h3>
              <p>No spam ever. Just high-value product discoveries and deal alerts once every two weeks.</p>
            </div>
          </div>

          {newsletterSubscribed ? (
            <div className="newsletter-success">
              <CheckCircle2 size={20} />
              <span>You're in! Welcome to the PickSmart insider list.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe Free"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  </>
);
}

export default BlogList;
