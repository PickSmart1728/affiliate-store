import { useEffect, useRef } from "react";
import { Grid, ShoppingBag, BookOpen, Laptop, Shirt, Home, Dumbbell, Headphones, Watch, Mouse, Sparkles, Tag, Glasses, Gamepad2, Utensils, Smartphone, Paperclip, Cpu } from "lucide-react";
import products from "../data/products";

// Pre-map known categories to their preferred icons
const iconMap = {
  "Bags & Travel": ShoppingBag,
  "Books & Reading": BookOpen,
  "Computer Accessories": Mouse,
  "Decor & Shine": Sparkles,
  "Electronics": Laptop,
  "Fashion Accessories": Glasses,
  "Home Essentials": Home,
  "Kids & Toys": Gamepad2,
  "Kitchen Essentials": Utensils,
  "Mobile Accessories": Smartphone,
  "Office & Stationery": Paperclip,
  "Tech Accessories": Cpu,
};

function CategoryStrip({ selectedCategory, setSelectedCategory }) {
  const scrollRef = useRef(null);

  // Automatically scroll to the selected category on mount and update
  useEffect(() => {
    if (scrollRef.current) {
      const activeElement = scrollRef.current.querySelector(".active");
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  }, [selectedCategory]);

  // Automatically extract unique categories from products
  const uniqueCategories = Array.from(new Set(products.map(p => p.category))).sort();

  // Build the array dynamically, prepending "All"
  const dynamicCategories = [
    { name: "All", icon: Grid },
    ...uniqueCategories.map(catName => ({
      name: catName,
      icon: iconMap[catName] || Tag // Fallback icon for any new unknown category
    }))
  ];

  return (
    <div className="category-strip-container">
      <div className="category-strip" ref={scrollRef}>
        {dynamicCategories.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.name;
          return (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`category-chip ${isActive ? "active" : ""}`}
              aria-label={`Filter by ${category.name}`}
            >
              <span className="category-chip-icon">
                <Icon size={16} />
              </span>
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryStrip;
