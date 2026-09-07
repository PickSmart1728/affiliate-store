import { Link } from "react-router-dom";
import { ExternalLink, CheckCircle2, Star, Sparkles, ArrowUpRight } from "lucide-react";
import products from "../data/products";

function BlogProductCallout({ productId, note }) {
  const product = products.find((p) => p.id === productId);

  if (!product) return null;

  return (
    <div className="blog-product-callout">
      <div className="blog-product-badge">
        <Sparkles size={14} />
        <span>PickSmart Featured Pick</span>
      </div>

      <div className="blog-product-grid">
        <div className="blog-product-image-container">
          <img
            src={product.gallery?.[0]?.src ?? product.image}
            alt={product.name}
            className="blog-product-image"
            loading="lazy"
          />
          <div className="blog-product-rating">
            <Star size={13} className="star-filled" />
            <Star size={13} className="star-filled" />
            <Star size={13} className="star-filled" />
            <Star size={13} className="star-filled" />
            <Star size={13} className="star-filled" />
            <span>4.8 / 5.0</span>
          </div>
        </div>

        <div className="blog-product-content">
          <div className="blog-product-category">{product.category}</div>
          <h4 className="blog-product-name">{product.name}</h4>
          
          <p className="blog-product-desc">{product.description}</p>

          {note && (
            <div className="blog-product-note">
              <CheckCircle2 size={16} className="note-icon" />
              <span><strong>Editor's Note:</strong> {note}</span>
            </div>
          )}

          {product.specs && product.specs.length > 0 && (
            <div className="blog-product-specs-chips">
              {product.specs.slice(0, 3).map((spec, i) => (
                <span key={i} className="spec-chip">
                  <strong>{spec.label}:</strong> {spec.value}
                </span>
              ))}
            </div>
          )}

          <div className="blog-product-actions">
            <a
              href={product.affiliate}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-affiliate-cta"
            >
              <span>View Deal on Amazon</span>
              <ExternalLink size={15} />
            </a>

            <Link
              to={`/product/${product.id}`}
              className="blog-store-link"
            >
              <span>Full Store Details</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogProductCallout;
