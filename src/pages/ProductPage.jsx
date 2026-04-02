import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2 style={{ padding: "120px" }}>Product not found</h2>;

  const originalPrice = Math.round(
    product.price / (1 - product.discount / 100)
  );

  return (
    <div className="product-page">

      {/* LEFT */}
      <div className="product-left">
        <img src={product.image} alt={product.name} className="main-img" />
      </div>

      {/* RIGHT */}
      <div className="product-right">

        <h1 className="title">{product.name}</h1>

        {/* RATING */}
        <div className="rating">
          ⭐ {product.rating} ({product.reviews} reviews)
        </div>

        {/* BRAND */}
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

        {/* DELIVERY */}
        <p className="delivery">{product.delivery}</p>

        {/* DESCRIPTION */}
        <p className="desc">{product.desc}</p>

        {/* QUANTITY */}
        <div className="qty-box">
          <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        {/* BUTTONS */}
        <div className="product-buttons">
          <button
            className="add-cart"
            disabled={!product.stock}
            onClick={() => addToCart({ ...product, qty })}
          >
            Add to Cart
          </button>

          <button className="buy-now" disabled={!product.stock}>
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductPage;