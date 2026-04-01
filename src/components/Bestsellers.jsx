import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "./bestsellers.css";

function Bestsellers() {
  const navigate = useNavigate();

  const best = products.filter((p) => p.bestseller);

  const handleClick = (name) => {
    navigate(`/category/${name.toLowerCase()}`);
  };

  return (
    <section className="bestsellers">
      <h2>Best Sellers</h2>
      <p className="subtitle">Explore top trending products</p>

      <div className="bestseller-grid">
        {best.map((product) => (
          <div
            className="bestseller-card"
            key={product.id}
            onClick={() => handleClick(product.name)}
          >
            <div className="image-box">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="bestseller-info">
              <h3>{product.name}</h3>
              <p className="desc">
                {product.desc || "Latest trending collection"}
              </p>
              <span className="explore">+ EXPLORE</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bestsellers;