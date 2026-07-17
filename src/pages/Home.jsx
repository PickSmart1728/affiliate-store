import { useEffect } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import CategoryStrip from "../components/CategoryStrip";
import HeroBanner from "../components/HeroBanner";
import { AlertCircle } from "lucide-react";

function Home({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) {
  // Save and restore scroll position when navigating to/from product details
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("homeScrollPosition");
    if (savedScroll) {
      // Use setTimeout to ensure DOM is fully rendered before scrolling
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedScroll, 10), behavior: "instant" });
      }, 0);
    }

    // Continuously save scroll position while browsing
    const handleScroll = () => {
      sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  // Filter products by selected category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Section title depending on search query and category
  const getSectionTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`;
    }
    if (selectedCategory !== "All") {
      return `${selectedCategory} Collection`;
    }
    return "Featured Products";
  };

  return (
    <div>
      {/* Hide the promo hero slider if user is searching for something specific */}
      {!searchQuery && (
        <HeroBanner setSelectedCategory={setSelectedCategory} />
      )}

      <CategoryStrip 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />

      <div className="container" id="products-showcase">
        <div className="home-section-header">
          <h2 className="home-title">{getSectionTitle()}</h2>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">
              <AlertCircle size={48} strokeWidth={1.5} />
            </div>
            <h3 className="empty-state-title">No products found</h3>
            <p className="empty-state-text">
              We couldn't find any products matching your current filters. Try resetting them or search for something else!
            </p>
            <button onClick={handleResetFilters} className="reset-btn">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;