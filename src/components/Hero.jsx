import React, { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    title: "Upgrade Your Setup",
    text: "Premium keyboards, mouse & monitors",
    image: "/images/setup.jpg",
  },
  {
    title: "Gaming Mouse",
    text: "Precision and speed",
    image: "/images/mouse1.png",
  },
  {
    title: "Ultra HD Monitor",
    text: "Experience clarity",
    image: "/images/monitor1.jpg",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE (5 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero">

      {slides.map((slide, index) => {
        let className = "slide";

        if (index === current) className += " active";
        else if (
          index === current - 1 ||
          (current === 0 && index === slides.length - 1)
        ) {
          className += " prev";
        }

        return (
          <div
            key={index}
            className={className}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>

            <div className="content">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <button>Shop Now</button>
            </div>
          </div>
        );
      })}

      {/* ARROWS */}
      <button className="arrow left" onClick={prevSlide}>❮</button>
      <button className="arrow right" onClick={nextSlide}>❯</button>

      {/* DOTS */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;