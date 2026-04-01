import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {

  const categories = [
    { name: "CPU", path: "cpu", image: "/images/cpu.png" },
    { name: "Keyboard", path: "keyboard", image: "/images/keyboard.png" },
    { name: "Motherboard", path: "motherboard", image: "/images/mother.jpg" },
    { name: "RAM", path: "ram", image: "/images/Ram.jpg" },
    { name: "Monitor", path: "monitor", image: "/images/monitor.png" },
    { name: "Mouse", path: "mouse", image: "/images/mouse.png" },
    { name: "Accessories", path: "accessories", image: "/images/acc.jpg" }
  ];

  return (
    <section className="categories-section">

      <div className="categories-header">
        <h2>Shop by Category</h2>
        <p>Find the best components for your setup</p>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => (
          <Link 
            to={`/category/${cat.path}`} 
            key={cat.name}
            className="category-link"
          >
            <div className="category-card">

              <div className="image-box">
                <img src={cat.image} alt={cat.name} />
              </div>

              <h3>{cat.name}</h3>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default Categories;