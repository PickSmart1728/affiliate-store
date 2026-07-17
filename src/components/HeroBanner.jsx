import { useState, useEffect, useRef } from "react";
import { ArrowRight, Star, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../data/products";

function getFeaturedPerCategory() {
  const map = new Map();
  products.forEach((p) => {
    if (!map.has(p.category)) map.set(p.category, p);
    if (p.featured) map.set(p.category, p);
  });
  return Array.from(map.values());
}

const ROTATE_MS = 4500;

export default function HeroBanner({ setSelectedCategory }) {
  // Calculate featured list on every render so HMR picks up new products automatically
  const featuredList = getFeaturedPerCategory();
  
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  // Safety fallback if activeIdx goes out of bounds after HMR
  const safeIdx = activeIdx >= featuredList.length ? 0 : activeIdx;
  const active = featuredList[safeIdx];
  const heroImage = active?.gallery?.[0]?.src ?? active?.image ?? null;

  const switchTo = (idx) => {
    if (idx === activeIdx || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setAnimating(false);
    }, 300);
  };

  // Auto-rotate
  useEffect(() => {
    if (featuredList.length <= 1) return;
    timerRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActiveIdx((i) => (i + 1) % featuredList.length);
        setAnimating(false);
      }, 300);
    }, ROTATE_MS);
    return () => clearInterval(timerRef.current);
  }, [featuredList.length]);

  const handleExplore = () => {
    if (active) setSelectedCategory(active.category);
    document.getElementById("products-showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!featuredList.length || !active) return null;

  return (
    <div className="hero-container">
      <div className="hero-unified">
        {/* Animated background blobs */}
        <div className="hero-blob hero-blob--1" />
        <div className="hero-blob hero-blob--2" />

        {/* Inner layout */}
        <div className={`hero-inner${animating ? " hero-inner--fade" : ""}`}>

          {/* ── Left: text ── */}
          <div className="hero-text-col">
            <div className="hero-meta-row">
              <span className="hero-top-pick-badge">
                <Star size={11} fill="currentColor" /> Top Pick
              </span>
              <span className="hero-cat-pill">{active.category}</span>
            </div>

            <h1 className="hero-unified-title">{active.name}</h1>

            <p className="hero-unified-sub">
              {active.description?.slice(0, 110)}…
            </p>

            <div className="hero-action-row">
              <button onClick={handleExplore} className="hero-primary-btn">
                Explore Deals <ArrowRight size={16} />
              </button>
              <Link to={`/product/${active.id}`} className="hero-secondary-btn">
                View Details
              </Link>
            </div>

            {/* Dot indicators */}
            {featuredList.length > 1 && (
              <div className="hero-dots-row">
                {featuredList.map((_, i) => (
                  <button
                    key={i}
                    className={`hero-dot${i === activeIdx ? " hero-dot--active" : ""}`}
                    onClick={() => switchTo(i)}
                    aria-label={`Category ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ── Right: product image showcase ── */}
          <div className="hero-image-col">
            <div className="hero-img-stage">
              {/* Glow ring behind the image */}
              <div className="hero-img-glow" />
              {heroImage && (
                <img
                  src={heroImage}
                  alt={active.name}
                  className="hero-img-product"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              )}
            </div>
          </div>

        </div>

        {/* Progress bar */}
        {featuredList.length > 1 && (
          <div className="hero-progress-bar" key={activeIdx}>
            <div className="hero-progress-fill" style={{ animationDuration: `${ROTATE_MS}ms` }} />
          </div>
        )}
      </div>
    </div>
  );
}
