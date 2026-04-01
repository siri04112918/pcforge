import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartDrawer.css";
import CartItem from "./CartItem";

export default function CartDrawer() {

  const {
    cart,
    total,
    isCartOpen,
    setIsCartOpen,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useCart();

  const navigate = useNavigate();

  return (
    <>
      {isCartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>

        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>✕</button>
        </div>

        <div className="cart-items">

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onIncrease={increaseQty}
                onDecrease={decreaseQty}
              />
            ))
          )}

        </div>

        <div className="cart-footer">
          <h3>Total: ₹{total}</h3>

          <button
            className="checkout-btn"
            onClick={() => {
              setIsCartOpen(false);
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>

      </div>
    </>
  );
}