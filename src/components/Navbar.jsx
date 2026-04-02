import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);

  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  
  const handleMenuEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  return (
    <nav className="navbar">
      {menuOpen && (
  <div className="overlay" onClick={() => setMenuOpen(false)}></div>
)}

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      <Link to="/" className="brand">
        <div className="pc-text">
          <span className="p">P</span>
          <span className="c">C</span>
        </div>
        <div className="forge-text">Forge</div>
      </Link>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li className="close-btn" onClick={() => setMenuOpen(false)}>
  ✕
</li>

        {/* ALL PRODUCTS */}
        <li
          className="nav-item"
          onMouseEnter={() => handleMenuEnter("all")}
          onMouseLeave={handleMenuLeave}
        >
          <Link to="/shop">All Products</Link>

          {activeMenu === "all" && (
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
          )}
        </li>

        {/* KEYBOARDS */}
        <li
          className="nav-item"
          onMouseEnter={() => handleMenuEnter("keyboard")}
          onMouseLeave={handleMenuLeave}
        >
          <Link to="/category/keyboard">Keyboards</Link>

          {activeMenu === "keyboard" && (
            <div className="mega-menu">
              <div className="menu-column">
                <h4>Keyboard Types</h4>
                <Link to="/category/mechanical-keyboard">Mechanical</Link>
                <Link to="/category/wireless-keyboard">Wireless</Link>
                <Link to="/category/gaming-keyboard">Gaming</Link>
              </div>
            </div>
          )}
        </li>

        {/* MOUSE */}
        <li
          className="nav-item"
          onMouseEnter={() => handleMenuEnter("mouse")}
          onMouseLeave={handleMenuLeave}
        >
          <Link to="/category/mouse">Mouse</Link>

          {activeMenu === "mouse" && (
            <div className="mega-menu">
              <div className="menu-column">
                <h4>Mouse Types</h4>
                <Link to="/category/gaming-mouse">Gaming Mouse</Link>
                <Link to="/category/wireless-mouse">Wireless Mouse</Link>
                <Link to="/category/mouse-pad">Mouse Pads</Link>
              </div>
            </div>
          )}
        </li>

        {/* MONITORS */}
        <li
          className="nav-item"
          onMouseEnter={() => handleMenuEnter("monitor")}
          onMouseLeave={handleMenuLeave}
        >
          <Link to="/category/monitor">Monitors</Link>

          {activeMenu === "monitor" && (
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
          )}
        </li>

      </ul>

      {/* SEARCH */}
      <div className="search-box">
        <FaSearch />
        <input
          placeholder="Search keyboards, monitors..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            navigate(`/shop?search=${e.target.value}`);
          }}
        />
      </div>

      {/* ICONS */}
      <div className="icons">

        {/* PROFILE */}
        <div className="icon" onClick={() => navigate("/profile")}>
          <FaUser />
          <span>Profile</span>
        </div>

        {/* WISHLIST */}
        <div className="icon" onClick={() => navigate("/wishlist")}>
          <FaHeart />
          <span>Wishlist</span>
        </div>

        {/* CART */}
        <div className="icon cart-icon" onClick={() => navigate("/checkout")}>
          <FaShoppingCart />

          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}

          <span>Cart</span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;