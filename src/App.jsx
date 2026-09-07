import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <BrowserRouter>
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        setSelectedCategory={setSelectedCategory}
      />

      <main className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
              />
            } 
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;