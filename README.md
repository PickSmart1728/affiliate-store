# PickSmart Affiliate Store

Welcome to the **PickSmart Affiliate Store**! This is a modern, static frontend application built with React and Vite. It serves as a curated storefront that showcases top-rated handpicked products across tech, home, fashion, and more. 

Every product listed has been personally reviewed and linked to Amazon via affiliate links, ensuring users get the best value and the site earns a commission at no extra cost to the buyer.

## 🚀 Features

- **Responsive Design**: A sleek, premium, mobile-friendly UI with smooth animations and a dynamic dark mode footer.
- **Product Filtering & Search**: Easily filter products by category (using a smooth-scrolling dynamic category strip) or search for specific items.
- **Rich Product Details**: Dedicated pages for each product featuring:
  - An interactive image/video gallery
  - Comprehensive specifications table
  - Related product recommendations
- **Interactive Modals**: Clean modal dialogs for FAQs (with an accordion pattern), Shipping & Deals, Privacy Policy, and Support Contacts.
- **Smart Scroll Restoration**: Automatically remembers and restores the user's exact scroll position when navigating back and forth between the product list and detail pages.
- **Fast Performance**: Built with Vite for rapid development and optimized production builds.

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM (v6)
- **Styling**: Vanilla CSS (CSS Variables, Grid, Flexbox, custom animations)
- **Icons**: Lucide React

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (or download the source code):
   ```bash
   git clone https://github.com/PickSmart1728/affiliate-store.git
   cd affiliate-store
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## 📁 Project Structure

```text
src/
├── assets/          # Static images and brand assets
├── components/      # Reusable React components (Navbar, Footer, ProductCard, CategoryStrip, etc.)
├── data/            # Static data source (products.js)
├── pages/           # Route-level components (Home, ProductDetails)
├── App.jsx          # Main application component and routing setup
├── index.css        # Global styles and design system tokens
└── main.jsx         # React application entry point
```

## 📝 Managing Products

Since the application is static, product data is managed locally in `src/data/products.js`. 
To add, edit, or remove products, simply update the array of objects in that file.

Example Product Object:
```javascript
{
  id: 1,
  name: "Laptop Backpack",
  category: "Bags & Travel",
  image: "image_url_here.jpg",
  gallery: [
    { type: "image", src: "gallery_image_url.jpg", alt: "Front view" }
  ],
  description: "A durable and secure laptop backpack...",
  affiliate: "https://link.amazon/...",
  specs: [
    { label: "Laptop Fit", value: "Up to 15.6 inch" }
  ]
}
```

## 🌐 Connect With Us

- **YouTube**: [PickSmart Channel](https://www.youtube.com/channel/UCXB2J4q1a1GvFAS7Lgw2mug)
- **Instagram**: [@picksmart_1728](https://www.instagram.com/picksmart_1728/)
- **Email**: picksmart1728@gmail.com

---
*PickSmart is an Amazon affiliate. We earn from qualifying purchases — at no extra cost to you.*
