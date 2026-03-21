import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {

  const { cart, total } = useCart();

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* LEFT SIDE */}
        <div className="checkout-items">

          {cart.map(item => (
            <div key={item.id} className="checkout-item">

              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <p>Qty: {item.qty}</p>
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="order-summary">

          <h2>Order Summary</h2>

          <p>Items: {cart.length}</p>

          <h3>Total: ₹{total}</h3>

          <button className="place-order-btn">
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;