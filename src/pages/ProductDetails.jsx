import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductGallery from "../components/ProductGallery";
import ProductSpecs from "../components/ProductSpecs";
import { ArrowLeft, ExternalLink } from "lucide-react";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // Scroll to top on load or product id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!product) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2>Product Not Found</h2>
        <p style={{ color: "var(--text-muted)", margin: "16px 0 24px" }}>
          The product you are looking for does not exist or has been removed.
        </p>
        <Link to="/" className="reset-btn" style={{ display: "inline-block" }}>
          Back to Home
        </Link>
      </div>
    );
  }

  const getPlatformName = (url) => {
    try {
      const hostname = new URL(url).hostname.toLowerCase();
      if (hostname.includes("amazon") || hostname.includes("amzn")) return "Amazon";
      if (hostname.includes("flipkart")) return "Flipkart";
      if (hostname.includes("meesho")) return "Meesho";
      if (hostname.includes("myntra")) return "Myntra";
      if (hostname.includes("ajio")) return "Ajio";
      return "Store";
    } catch {
      return "Store";
    }
  };

  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="details-container">
      <Link to="/" className="back-link">
        <ArrowLeft size={16} /> Back to Products
      </Link>

      <div className="details">
        {/* ── Left: Gallery ─────────────────────────── */}
        <div className="details-gallery">
          <ProductGallery gallery={product.gallery} name={product.name} />
        </div>

        {/* ── Right: Info ───────────────────────────── */}
        <div className="details-info">
          <span className="details-category">{product.category}</span>
          <h1 className="details-title">{product.name}</h1>

          <p className="details-description">{product.description}</p>

          {/* Unified spec table */}
          <ProductSpecs specs={product.specs} />

          <div className="buy-card">
            <a
              href={product.affiliate}
              target="_blank"
              rel="noopener noreferrer"
              className="buy"
            >
              Get Deal on {getPlatformName(product.affiliate)}{" "}
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Related Products ──────────────────────── */}
      {relatedProducts.length > 0 && (
        <div className="related-section">
          <h3 className="related-title">You Might Also Like</h3>
          <div className="grid" style={{ marginTop: 24 }}>
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;