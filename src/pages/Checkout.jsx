import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    house: "",
    street: "",
    landmark: "",
    city: "",
    zip: "",
  });

  const [payment, setPayment] = useState("");
  const [error, setError] = useState("");


  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );

          const data = await res.json();
          const address = data.address;

        setForm((prev) => ({
        ...prev,
        city: address.city || address.town || address.village || "",
        zip: address.postcode || "",
        street:
          address.road ||
          address.neighbourhood ||
          address.suburb ||
          address.residential ||
          address.hamlet ||
          "",
      }));
        } catch (err) {
          console.error(err);
        }

        setLoadingLocation(false);
      },
      () => {
        alert("Location permission denied");
        setLoadingLocation(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
      }
    );
  };

  
  const fetchLocationByPincode = async (pincode) => {
    if (pincode.length !== 6) return;

    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await res.json();

      if (data[0].Status === "Success") {
        const postOffice = data[0].PostOffice[0];

        setForm((prev) => ({
          ...prev,
          city: postOffice.District,
        }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handlePlaceOrder = () => {
    const { name, email, phone, house, street, city, zip } = form;

    if (!name || !email || !phone || !house || !street || !city || !zip) {
      setError("Please fill all details ❗");
      return;
    }

    if (!payment) {
      setError("Please select payment method ❗");
      return;
    }

    setError("");
    setOrderPlaced(true);
  };

  
  if (orderPlaced) {
    return (
      <div className="order-success-page">
        <div className="order-success-card">
          <h1>Order Placed Successfully!</h1>
          <p>Your order will arrive in 3–5 business days.</p>

          <button
            className="continue-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">

        
        <div className="checkout-left">

          <h2>Shipping Details</h2>

      
          <button onClick={getLocation} className="location-btn">
            {loadingLocation ? "Detecting location..." : "Use Current Location"}
          </button>

          <div className="form-grid">

            <input
              name="name"
              value={form.name}
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              name="email"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              name="phone"
              value={form.phone}
              placeholder="Phone"
              onChange={handleChange}
            />

            <input
              name="house"
              value={form.house}
              placeholder="Flat, House No, Building"
              onChange={handleChange}
            />

            <input
              name="street"
              value={form.street}
              placeholder="Area, Street, Sector"
              onChange={handleChange}
            />

            <input
              name="landmark"
              value={form.landmark}
              placeholder="Landmark (Optional)"
              onChange={handleChange}
            />

            <input
              name="city"
              value={form.city}
              placeholder="City"
              onChange={handleChange}
            />

            <input
              name="zip"
              value={form.zip}
              placeholder="Zip Code"
              onChange={(e) => {
                const value = e.target.value;
                setForm({ ...form, zip: value });
                fetchLocationByPincode(value);
              }}
            />

          </div>

          <h2>Payment Method</h2>

          <div className="payment-options">

            <label>
              <input
                type="radio"
                value="cod"
                onChange={(e) => setPayment(e.target.value)}
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                value="upi"
                onChange={(e) => setPayment(e.target.value)}
              />
              UPI
            </label>

            <label>
              <input
                type="radio"
                value="card"
                onChange={(e) => setPayment(e.target.value)}
              />
              Card Payment
            </label>

          </div>

          {error && (
            <p style={{ color: "red", marginTop: "10px" }}>
              {error}
            </p>
          )}

        </div>

        {/* RIGHT */}
        <div className="checkout-right">
          <h2>Order Summary</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="order-item">
                <p>{item.name}</p>
                <p>{item.qty} x ₹{item.price}</p>
              </div>
            ))
          )}

          <h3>Total: ₹{total}</h3>

          <button className="place-order" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
}

export default Checkout;