import { useEffect } from "react";

/**
 * SEOHead Component
 * Dynamically updates document title, meta descriptions, Open Graph & Twitter cards,
 * canonical links, and injects Google Schema.org (JSON-LD) structured data.
 */
export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogType = "article",
  keywords = [],
  schemaData = null,
}) {
  useEffect(() => {
    // 1. Set Document Title
    const formattedTitle = title ? `${title} | PickSmart` : "PickSmart | Curated Lifestyle & Tech Buying Guides";
    document.title = formattedTitle;

    // Helper to create or update meta tag
    const setMetaTag = (attribute, name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // 2. Standard Search Meta Tags
    setMetaTag("name", "description", description || "Curated buying guides, honest gadget recommendations, and smart problem solvers on PickSmart.");
    if (keywords && keywords.length > 0) {
      setMetaTag("name", "keywords", keywords.join(", "));
    }
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // 3. Open Graph / Facebook Meta Tags
    setMetaTag("property", "og:title", formattedTitle);
    setMetaTag("property", "og:description", description || "Find the best curated products, honest comparisons, and daily lifestyle essentials.");
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:url", canonicalUrl || window.location.href);
    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
    }
    setMetaTag("property", "og:site_name", "PickSmart");

    // 4. Twitter Card Meta Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", formattedTitle);
    setMetaTag("name", "twitter:description", description || "Curated buying guides and smart product recommendations.");
    if (ogImage) {
      setMetaTag("name", "twitter:image", ogImage);
    }

    // 5. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl || window.location.href);

    // 6. Google Schema.org JSON-LD Structured Data
    const schemaScriptId = "picksmart-json-ld";
    let schemaScript = document.getElementById(schemaScriptId);
    if (schemaData) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = schemaScriptId;
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      // Cleanup custom JSON-LD on unmount
      const existingScript = document.getElementById(schemaScriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, canonicalUrl, ogImage, ogType, keywords, schemaData]);

  return null;
}
