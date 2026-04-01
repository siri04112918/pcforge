import React from "react";
import { useWishlist } from "../context/WishlistContext";
import "./Wishlist.css";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist </h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button onClick={() => removeFromWishlist(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;