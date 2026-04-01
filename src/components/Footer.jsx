import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer">

    
      <div className="features">
        <div className="feature">
          <span>🚚</span>
          <h4>Free Shipping</h4>
          <p>On all orders above ₹999</p>
        </div>

        <div className="feature">
          <span>🔒</span>
          <h4>Secure Payment</h4>
          <p>100% safe transactions</p>
        </div>

        <div className="feature">
          <span>🔁</span>
          <h4>Easy Returns</h4>
          <p>7 days return policy</p>
        </div>

        <div className="feature">
          <span>🎧</span>
          <h4>24/7 Support</h4>
          <p>We are here to help</p>
        </div>
      </div>

      
      <div className="footer-container">

        <div>
          <h2>PC Forge</h2>
          <p>Your one-stop shop for PC components and accessories.</p>
          <div className="footer-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Orders</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div>
          <h3>Categories</h3>
          <ul>
            <li>Keyboards</li>
            <li>Mouse</li>
            <li>Monitors</li>
            <li>Motherboards</li>
          </ul>
        </div>

        <div>
          <h3>Customer Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping Info</li>
            <li>Track Order</li>
          </ul>
        </div>

      </div>

      
      <div className="subscribe">
        <h3>Subscribe</h3>
        <p>Get latest deals & offers</p>

        <div className="subscribe-box">
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© 2026 PC Forge. All rights reserved.</p>
        <div className="payment">
          <span>Visa</span>
          <span>MasterCard</span>
          <span>UPI</span>
          <span>PayPal</span>
        </div>
      </div>

    </div>
  );
}

export default Footer;