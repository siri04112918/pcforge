import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <Link to={`/product/${product.id}`} className="product-link">
        <div className="image-wrapper">
          <img src={product.image} alt={product.name} />
        </div>

        <h3 className="product-title">{product.name}</h3>
      </Link>

      <p className="product-price">₹{product.price}</p>

      <button
        className="add-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;