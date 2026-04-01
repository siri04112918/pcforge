import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bestsellers from "./components/Bestsellers";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import Promo from "./components/Promo";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {

  return (
    <div className="app"> 

      <Navbar />
      <ScrollToTop />
      <CartDrawer />

      
      <div className="main-content">

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero />

                <div className="container">
                  <Bestsellers />
                  <Promo />
                  <Categories />
                  <ProductList />
                </div>
              </>
            }
          />

          {/* SHOP */}
          <Route
            path="/shop"
            element={
              <div className="container">
                <Shop />
              </div>
            }
          />

          {/* CATEGORY */}
          <Route
            path="/category/:category"
            element={
              <div className="container">
                <ProductList />
              </div>
            }
          />

          {/* PRODUCT */}
          <Route path="/product/:id" element={<ProductPage />} />

          {/* OTHER */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />

        </Routes>

      </div>

      
      <Footer />

    </div>
  );
}

export default App;