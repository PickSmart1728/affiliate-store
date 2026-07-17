import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

/**
 * ProductGallery
 *
 * Props:
 *   gallery  — Array<{ type: "image"|"video", src: string, alt: string }>
 *   name     — string  (product name, used for img alt fallback)
 */
function ProductGallery({ gallery = [], name = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const iframeRef = useRef(null);

  const active = gallery[activeIndex] ?? gallery[0];
  const hasMultiple = gallery.length > 1;

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft")  setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % gallery.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [gallery.length]);

  const goTo = useCallback((idx) => setActiveIndex(idx), []);
  const goPrev = useCallback(() => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length), [gallery.length]);
  const goNext = useCallback(() => setActiveIndex((i) => (i + 1) % gallery.length), [gallery.length]);

  // Build YouTube embed URL with autoplay + muted
  const buildVideoSrc = (src) => {
    try {
      const url = new URL(src);
      url.searchParams.set("autoplay", "1");
      url.searchParams.set("mute", "1");
      url.searchParams.set("rel", "0");
      url.searchParams.set("modestbranding", "1");
      return url.toString();
    } catch {
      return src;
    }
  };

  if (!gallery.length) return null;

  return (
    <div className="gallery-root">
      {/* ── Main viewer ─────────────────────────────── */}
      <div className="gallery-viewer" aria-label="Product gallery viewer">
        {/* Prev / Next arrows (only when multiple items) */}
        {hasMultiple && (
          <>
            <button
              className="gallery-arrow gallery-arrow--left"
              onClick={goPrev}
              aria-label="Previous media"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="gallery-arrow gallery-arrow--right"
              onClick={goNext}
              aria-label="Next media"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {/* Media area */}
        <div className="gallery-media-area" key={activeIndex}>
          {active?.type === "video" ? (
            <iframe
              ref={iframeRef}
              className="gallery-iframe"
              src={buildVideoSrc(active.src)}
              title={active.alt || name}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              className="gallery-main-img"
              src={active?.src}
              alt={active?.alt || name}
            />
          )}
        </div>

        {/* Dot indicators */}
        {hasMultiple && (
          <div className="gallery-dots" aria-label="Gallery navigation dots">
            {gallery.map((_, i) => (
              <button
                key={i}
                className={`gallery-dot${i === activeIndex ? " gallery-dot--active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to media ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Thumbnail strip ──────────────────────────── */}
      {hasMultiple && (
        <div className="gallery-thumbs" role="list" aria-label="Gallery thumbnails">
          {gallery.map((item, i) => (
            <button
              key={i}
              role="listitem"
              className={`gallery-thumb${i === activeIndex ? " gallery-thumb--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={item.alt || `Media ${i + 1}`}
              aria-pressed={i === activeIndex}
            >
              {item.type === "video" ? (
                <>
                  {/* Video thumbnail — use a still from YouTube or a generic frame */}
                  <div className="gallery-thumb-video-bg">
                    <img
                      src={`https://img.youtube.com/vi/${extractYouTubeId(item.src)}/mqdefault.jpg`}
                      alt={item.alt || "Video thumbnail"}
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  </div>
                  {/* Play button overlay */}
                  <span className="gallery-thumb-play" aria-hidden="true">
                    <Play size={18} fill="white" />
                  </span>
                </>
              ) : (
                <img src={item.src} alt={item.alt || name} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Extract YouTube video ID from various URL formats */
function extractYouTubeId(src) {
  try {
    const url = new URL(src);
    // e.g. https://www.youtube.com/embed/ABC123
    if (url.pathname.startsWith("/embed/")) return url.pathname.split("/embed/")[1].split("?")[0];
    // e.g. https://www.youtube.com/watch?v=ABC123
    return url.searchParams.get("v") ?? "";
  } catch {
    return "";
  }
}

export default ProductGallery;
