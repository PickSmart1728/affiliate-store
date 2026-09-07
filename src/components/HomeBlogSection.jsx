import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import BlogCard from "./BlogCard";

function HomeBlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="home-blog-section">
      <div className="container">
        <div className="home-blog-header">
          <div className="home-blog-title-group">
            <span className="section-pill">
              <Sparkles size={13} />
              Buying Advice & Guides
            </span>
            <h2 className="section-title">Latest from the PickSmart Blog</h2>
            <p className="section-subtitle">
              In-depth gear breakdowns, minimalist workspace setups, and honest buying recommendations.
            </p>
          </div>

          <Link to="/blog" className="home-blog-view-all">
            <span>Explore All Guides</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="home-blog-grid">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeBlogSection;
