import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductPage.css";
import Checkout from "./Checkout";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, openCart } = useCart();

  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2 style={{ padding: "120px" }}>Product not found</h2>;


  const originalPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : product.price;

  const handleAddToCart = () => {
    addToCart({ ...product, qty: 1 });
    setAdded(true);
  };

  return (
    <div className="product-page">

      {/* LEFT */}
      <div className="product-left">
        <img src={product.image} alt={product.name} className="main-img" />
      </div>

      {/* RIGHT */}
      <div className="product-right">

        <h1 className="title">{product.name}</h1>

        <div className="rating">
          ⭐ {product.rating} ({product.reviews} reviews)
        </div>

        <p className="brand">Brand: {product.brand}</p>

        {/* PRICE */}
        <div className="price-box">
          <span className="price">₹{product.price}</span>
          <span className="mrp">₹{originalPrice}</span>
          <span className="discount">-{product.discount}%</span>
        </div>

        {/* STOCK */}
        <p className={`stock ${product.stock ? "in" : "out"}`}>
          {product.stock ? "In Stock" : "Out of Stock"}
        </p>

        <p className="delivery">{product.delivery}</p>

        <p className="desc">{product.desc}</p>

        
        <div className="product-buttons">

          {added ? (
            <button
              className="go-to-bag"
              onClick={() =>navigate("/Checkout")}
            >
              GO TO BAG →
            </button>
          ) : (
            <button
              className="add-cart"
              disabled={!product.stock}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}

          <button className="buy-now" disabled={!product.stock}>
            Buy Now
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductPage;