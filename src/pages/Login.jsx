import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (phone.length === 10) {
      setStep(2);
    } else {
      alert("Enter valid mobile number");
    }
  };

  const handleVerifyOtp = () => {

    if (otp === "1234") {

      localStorage.setItem("userLoggedIn", "true");
      navigate("/");

    } else {

      alert("Invalid OTP");

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

    

        {step === 1 && (
          <>
            <h2>Login or Signup</h2>

            <div className="phone-input">

              <span>+91</span>

              <input
                type="text"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

            </div>

            <button
              className="continue-btn"
              onClick={handleSendOtp}
            >
              CONTINUE
            </button>
          </>
        )}


        {step === 2 && (
          <>
            <h2>Verify OTP</h2>

            <p>OTP sent to +91 {phone}</p>

            <input
              className="otp-input"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              className="continue-btn"
              onClick={handleVerifyOtp}
            >
              VERIFY OTP
            </button>

            <p className="otp-note">
              Use OTP: <b>1234</b>
            </p>
          </>
        )}

      </div>

    </div>

  );
}

export default Login;