import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-page">

      {/* LEFT IMAGE */}
      <div className="product-left">
        <img src={product.image} alt={product.name} />
      </div>

      {/* RIGHT DETAILS */}
      <div className="product-right">

        <h1 className="title">{product.name}</h1>

        {/*  RATING */}
        <div className="rating">
           {product.rating} ({product.reviews} reviews)
        </div>

        {/* BRAND */}
        <p className="brand">Brand: {product.brand}</p>

        {/* PRICE */}
        <div className="price-box">
          <span className="discount">-{product.discount}%</span>
          <span className="price">₹{product.price}</span>
        </div>

        {/* STOCK */}
        <p className={`stock ${product.stock ? "in" : "out"}`}>
          {product.stock ? "In Stock" : "Out of Stock"}
        </p>

        {/* DELIVERY */}
        <p className="delivery">{product.delivery}</p>

        {/* DESCRIPTION */}
        <p className="desc">{product.desc}</p>

        {/* BUTTONS */}
        <div className="product-buttons">
          <button className="add-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>

          <button className="buy-now">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductPage;