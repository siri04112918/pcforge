import React, { useState } from "react";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function PhoneLogin() {

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const sendOtp = async () => {
    try {

      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "normal",
            callback: () => {
              console.log("reCAPTCHA solved");
            }
          }
        );
      }

      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(auth, phone, appVerifier);

      setConfirmationResult(result);

      alert("OTP Sent!");

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const verifyOtp = async () => {
    try {

      await confirmationResult.confirm(otp);

      alert("Login Successful!");

    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login with Phone</h2>

      <input
        type="text"
        placeholder="+91XXXXXXXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={sendOtp}>Send OTP</button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={verifyOtp}>Verify OTP</button>

      <br /><br />

      <div id="recaptcha-container"></div>
    </div>
  );
}

export default PhoneLogin;