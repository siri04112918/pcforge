import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {

  const { cart } = useCart();
  const navigate = useNavigate();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  /* ORDER SUCCESS SCREEN */

  if (orderPlaced) {

    return (

      <div className="order-success">

        <h1>🎉 Order Placed Successfully!</h1>

        <p>Your order will arrive in 3-5 business days.</p>

        <button
          className="continue-btn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

      </div>

    );
  }

  return (

    <div className="checkout-container">

      {/* LEFT SIDE */}

      <div className="checkout-left">

        <h2>Shipping Details</h2>

        <div className="form-grid">

          <input placeholder="Full Name" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <input placeholder="Address" />
          <input placeholder="City" />
          <input placeholder="Zip Code" />

        </div>


        <h2>Payment Method</h2>

        <div className="payment-options">

          <label>
            <input type="radio" name="payment" />
            Cash on Delivery
          </label>

          <label>
            <input type="radio" name="payment" />
            UPI
          </label>

          <label>
            <input type="radio" name="payment" />
            Card Payment
          </label>

        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="checkout-right">

        <h2>Order Summary</h2>

        {cart.map((item) => (

          <div key={item.id} className="order-item">

            <p>{item.name}</p>

            <p>
              {(item.quantity || 1)} x ₹{item.price}
            </p>

          </div>

        ))}

        <h3>Total: ₹{total}</h3>

        <button
          className="place-order"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>

      </div>

    </div>

  );
}

export default Checkout;