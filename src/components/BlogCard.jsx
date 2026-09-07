import { Link } from "react-router-dom";
import { Clock, ArrowRight, Tag, Zap, Sparkles } from "lucide-react";

function BlogCard({ post, featured = false }) {
  if (!post) return null;

  return (
    <article className={`blog-card ${featured ? "blog-card--featured" : ""}`}>
      <Link to={`/blog/${post.slug}`} className="blog-card-image-wrap">
        <img
          src={post.coverImage}
          alt={post.title}
          className="blog-card-image"
          loading="lazy"
        />
        <span className="blog-card-category-badge">
          <Tag size={12} />
          {post.category}
        </span>
        {post.budgetBadge && (
          <span className="blog-card-budget-badge">
            <Sparkles size={11} />
            {post.budgetBadge}
          </span>
        )}
      </Link>

      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span className="meta-item">
            <Clock size={13} />
            {post.readTime}
          </span>
        </div>

        <h3 className="blog-card-title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="blog-card-excerpt">{post.excerpt}</p>

        <div className="blog-card-footer">
          <div className="blog-author-compact">
            <div className="blog-brand-icon-badge" aria-hidden="true">
              <Zap size={13} />
            </div>
            <span className="blog-author-name-sm">PickSmart Team</span>
          </div>

          <Link to={`/blog/${post.slug}`} className="blog-read-more-btn" aria-label={`Read ${post.title}`}>
            <span>Read Guide</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
