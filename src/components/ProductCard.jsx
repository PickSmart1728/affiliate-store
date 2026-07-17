import { useState, useEffect, useRef } from "react";
import { ArrowRight, Images } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * ProductCard
 *
 * Shows the primary gallery image on rest state.
 * On hover, cycles through all gallery images (2-second interval per image).
 */
function ProductCard({ product }) {
  // Build ordered list of image sources from gallery; fall back to legacy `image` field
  const imageSrcs = (product.gallery ?? [])
    .filter((item) => item.type === "image")
    .map((item) => item.src);

  // Ensure at least one image even for legacy products
  if (!imageSrcs.length && product.image) imageSrcs.push(product.image);

  const [currentImg, setCurrentImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Start/stop cycling on hover
  useEffect(() => {
    if (isHovered && imageSrcs.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % imageSrcs.length);
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
      setCurrentImg(0); // Reset to primary image when not hovering
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, imageSrcs.length]);

  // Count of non-primary media items for the badge
  const extraMediaCount = (product.gallery ?? []).length - 1;

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image-wrapper">
        <span className="card-category">{product.category}</span>

        {/* Gallery count badge — only show when there's more than 1 item */}
        {extraMediaCount > 0 && (
          <span className="card-media-badge" aria-label={`${extraMediaCount + 1} media items`}>
            <Images size={11} />
            &nbsp;{extraMediaCount + 1}
          </span>
        )}

        {/* Image cycling */}
        {imageSrcs.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={product.name}
            loading="lazy"
            className={`card-gallery-img${i === currentImg ? " card-gallery-img--active" : ""}`}
          />
        ))}
      </div>

      <div className="card-content">
        <h3 className="card-title" title={product.name}>
          {product.name}
        </h3>

        <Link className="btn" to={`/product/${product.id}`}>
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;