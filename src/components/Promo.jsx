import "./Promo.css";

function Promo() {
  return (
    <section className="promo">

      <div className="promo-inner">

        {/* LEFT SIDE */}
        <div className="promo-left">
          <h4 className="brand">PC FORGE</h4>

          <h1>Next-Gen Gaming PCs</h1>

          <p className="tagline">
            Power. Speed. Performance.
          </p>

          <div className="promo-buttons">
            <button className="outline">Learn More</button>
            <button className="filled">Shop Now</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="promo-right">
          <img src="/images/banner.png" alt="Gaming Setup" />

          {/* LINKS UNDER IMAGE */}
          <div className="promo-links">
            <span>Gaming Monitors</span>
            <span>Keyboards</span>
            <span>Desktops</span>
            <span>Gaming Mice</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Promo;