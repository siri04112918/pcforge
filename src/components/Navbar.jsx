import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    window.location.reload();
  };

  // 🔥 FIX FOR DROPDOWN (delay)
  let timeout;

  const handleEnter = () => {
    clearTimeout(timeout);
    setShowProfile(true);
  };

  const handleLeave = () => {
    timeout = setTimeout(() => {
      setShowProfile(false);
    }, 200); // smooth delay
  };

  return (
    <nav className="navbar">
      {/* MOBILE MENU */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </div>

      {/* LOGO */}
      <Link to="/" className="brand">
        <div className="pc-text">
          <span className="p">P</span>
          <span className="c">C</span>
        </div>

        <div className="forge-text">Forge</div>
      </Link>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li className="nav-item">
          PC Parts
          <div className="mega-menu">
            <div className="menu-column">
              <h4>Core Parts</h4>
              <Link to="/category/motherboard">Motherboards</Link>
              <Link to="/category/cpu">Processors</Link>
              <Link to="/category/ram">RAM</Link>
              <Link to="/category/gpu">Graphics Cards</Link>
            </div>

            <div className="menu-column">
              <h4>Storage</h4>
              <Link to="/category/ssd">SSD</Link>
              <Link to="/category/hdd">HDD</Link>
              <Link to="/category/nvme">NVMe</Link>
            </div>

            <div className="menu-column">
              <h4>Cooling</h4>
              <Link to="/category/air-cooler">Air Coolers</Link>
              <Link to="/category/liquid-cooler">Liquid Coolers</Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          Keyboards
          <div className="mega-menu">
            <div className="menu-column">
              <h4>Keyboard Types</h4>
              <Link to="/category/mechanical-keyboard">Mechanical</Link>
              <Link to="/category/wireless-keyboard">Wireless</Link>
              <Link to="/category/gaming-keyboard">Gaming</Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          Mouse
          <div className="mega-menu">
            <div className="menu-column">
              <h4>Mouse Types</h4>
              <Link to="/category/gaming-mouse">Gaming Mouse</Link>
              <Link to="/category/wireless-mouse">Wireless Mouse</Link>
              <Link to="/category/mouse-pad">Mouse Pads</Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          Monitors
          <div className="mega-menu">
            <div className="menu-column">
              <h4>Gaming</h4>
              <Link to="/category/144hz-monitor">144Hz</Link>
              <Link to="/category/240hz-monitor">240Hz</Link>
            </div>

            <div className="menu-column">
              <h4>Resolution</h4>
              <Link to="/category/1080p-monitor">1080p</Link>
              <Link to="/category/1440p-monitor">1440p</Link>
              <Link to="/category/4k-monitor">4K</Link>
            </div>
          </div>
        </li>
      </ul>

      {/* SEARCH */}
      <div className="search-box">
        <FaSearch />
        <input placeholder="Search keyboards, monitors..." />
      </div>

      {/* ICONS */}
      <div className="icons">
        {/* PROFILE (FIXED) */}
        <div
          className="profile-wrapper"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="icon profile-icon">
            <FaUser />
            <span>Profile</span>
          </div>

          {showProfile && (
            <div className="profile-dropdown">
              {!isLoggedIn ? (
                <>
                  <p className="welcome">Welcome</p>

                  <p className="profile-sub">
                    To access account and manage orders
                  </p>

                  <button
                    className="login-btn"
                    onClick={() => navigate("/login")}
                  >
                    LOGIN / SIGNUP
                  </button>

                  <hr />

                  <p onClick={() => navigate("/orders")}>Orders</p>
                  <p onClick={() => navigate("/wishlist")}>Wishlist</p>
                  <p>Contact Us</p>
                </>
              ) : (
                <>
                  <p className="welcome">Hello User</p>

                  <button
                    className="logout-btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>

                  <hr />

                  <p onClick={() => navigate("/orders")}>My Orders</p>
                  <p onClick={() => navigate("/wishlist")}>Wishlist</p>
                  <p>Saved Addresses</p>
                </>
              )}
            </div>
          )}
        </div>

        {/* WISHLIST */}
        <div
          className="icon"
          onClick={() => navigate("/wishlist")}
        >
          <FaHeart />
          <span>Wishlist</span>
        </div>

        {/* CART */}
        <div
          className="icon"
          onClick={() => navigate("/checkout")}
        >
          <FaShoppingCart />
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;