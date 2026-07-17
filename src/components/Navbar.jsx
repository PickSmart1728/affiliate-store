import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, X } from "lucide-react";
import products from "../data/products";

function Navbar({ searchQuery, setSearchQuery, setSelectedCategory }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // If we're not on Home, redirect to Home to show results
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const handleClear = () => {
    setSearchQuery("");
  };

  const handleLogoClick = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter suggestions based on input
  const suggestions = searchQuery.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <header className="header-wrapper">
      <nav className="navbar">
        <Link to="/" onClick={handleLogoClick} className="logo-group">
          <img src="/logo_transparent.png?v=3" alt="PickSmart Logo" className="logo-image" style={{ height: '40px', width: 'auto', marginRight: '-12px' }} />
          <span className="logo">PickSmart</span>
        </Link>

        <div className="search-container" ref={searchRef}>
          <div className="search-bar-wrapper">
            <div className="search-icon">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search for premium products..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setShowSuggestions(true)}
              className="search-input"
            />
            {searchQuery && (
              <button onClick={handleClear} className="clear-search-btn" aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </div>

          {/* Autocomplete suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="search-suggestions">
              {suggestions.map((product) => (
                <div
                  key={product.id}
                  className="suggestion-item"
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                    setShowSuggestions(false);
                    setSearchQuery(""); // Clear search query when navigating directly
                  }}
                >
                  <img
                    src={product.gallery?.[0]?.src ?? product.image}
                    alt={product.name}
                    className="suggestion-item-image"
                  />
                  <div className="suggestion-item-info">
                    <span className="suggestion-item-name">{product.name}</span>
                    <span className="suggestion-item-category">{product.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>


      </nav>
    </header>
  );
}

export default Navbar;