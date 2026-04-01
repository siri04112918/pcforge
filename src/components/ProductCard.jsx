import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isWishlisted = wishlist.some(item => item.id === product.id);

  const handleWishlist = (e) => {
    e.stopPropagation(); 
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)} 
    >

      <button
        className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
        onClick={handleWishlist}
      >
        <FaHeart />
      </button>

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p className="desc">{product.desc}</p>
      <p className="price">₹{product.price}</p>

      <button
        className="add-btn"
        onClick={(e) => {
          e.stopPropagation(); 
          addToCart(product);
        }}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;