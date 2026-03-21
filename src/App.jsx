import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";

import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bestsellers from "./components/Bestsellers";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";
import CartDrawer from "./components/CartDrawer";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import "./App.css";
import PhoneLogin from "./PhoneLogin";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import Shop from "./pages/Shop";

function App() {

  // ✅ SMOOTH SCROLL (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,   // smoothness
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>

      <Navbar />

      <CartDrawer />

      <Routes>

        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/:query" element={<ProductList />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:type" element={<Categories />} />

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Bestsellers />
              <Categories />
              <ProductList />
              <Footer />
            </>
          }
        />

        <Route path="/category/:category" element={<ProductList />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/product/:id" element={<ProductPage />} />

      </Routes>

    </div>
  );
}

export default App;