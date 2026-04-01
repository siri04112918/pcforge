import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [input, setInput] = useState("");

  const handleContinue = () => {
    if (!input) {
      alert("Please enter email or mobile number");
      return;
    }

    localStorage.setItem("userLoggedIn", true);
    window.location.href = "/";
  };

  return (
    <div className="login-page">
      {/* LOGO */}
      <h1 className="login-logo">PCForge</h1>

      {/* CARD */}
      <div className="login-card">
        <h2>Sign in or create account</h2>

        <label>Enter mobile number or email</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="continue-btn" onClick={handleContinue}>
          Continue
        </button>

        <p className="terms">
          By continuing, you agree to PCForge's{" "}
          <span>Conditions of Use</span> and <span>Privacy Notice</span>.
        </p>

        <hr />

        <h4>Buying for work?</h4>
        <p className="business">Create a free business account</p>
      </div>

      {/* FOOTER */}
      <div className="login-footer">
        <span>Conditions of Use</span>
        <span>Privacy Notice</span>
        <span>Help</span>
        <p>© 2026 PCForge.com</p>
      </div>
    </div>
  );
}

export default Login;