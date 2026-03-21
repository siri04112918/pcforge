import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./cartDrawer.css";

export default function CartDrawer() {

  const {
    cart,
    total,
    isCartOpen,
    setIsCartOpen,
    increaseQty,
    decreaseQty
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
              <div key={item.id} className="cart-item">

                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>

    
                  <div className="qty-controls">

                    <button
                      onClick={() => decreaseQty(item.id)}
                    >
                      🗑
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>
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