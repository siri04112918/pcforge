import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-premium">

      {/* LEFT */}
      <div className="hero-left">
        <h1>
          Build Your <br />
          <span>Setup</span>
        </h1>

        <p>
          Premium keyboards, mice & monitors for your perfect workspace
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">Explore</button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">

        <div className="card card1">
          <img src="/images/keyboard.jpg" alt="keyboard" />
        </div>

        <div className="card card2">
          <img src="/images/mouse.jpg" alt="mouse" />
        </div>

        <div className="card card3">
          <img src="/images/monitor.jpg" alt="monitor" />
        </div>

      </div>

    </section>
  );
}

export default Hero;