import React from "react";
import "./Footers.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-section">
          <h2>PC Forge</h2>
          <p>
            Your one-stop shop for PC components and accessories.
          </p>

          <div className="footer-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Orders</li>
            <li>Wishlist</li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Keyboards</li>
            <li>Mouse</li>
            <li>Monitors</li>
            <li>Motherboards</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping Info</li>
            <li>Track Order</li>
          </ul>
        </div>

      </div>

      {/* SUBSCRIBE */}
      <div className="subscribe">
        <h3>Subscribe</h3>
        <p>Get latest deals & offers</p>

        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 PC Forge. All rights reserved.</p>

        <div className="payment">
          <span>Visa</span>
          <span>MasterCard</span>
          <span>UPI</span>
          <span>PayPal</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;