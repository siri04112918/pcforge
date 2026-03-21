import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {

  const categories = [
    { name: "CPU", path: "cpu", image: "/images/cpu.jpg" },
    { name: "Keyboard", path: "keyboard", image: "/images/keyboard.jpg" },
    { name: "Motherboard", path: "motherboard", image: "/images/mother.jpg" },
    { name: "RAM", path: "ram", image: "/images/Ram.jpg" },
    { name: "Monitor", path: "monitor", image: "/images/monitor.jpg" },
    { name: "Mouse", path: "mouse", image: "/images/mouse.jpg" },
    { name: "Accessories", path: "accessories", image: "/images/acc.jpg" }
  ];

  return (
    <section className="categories-section">

      <h2>Shop by Category</h2>

      <div className="categories-grid">

        {categories.map((cat) => (

        <Link to={`/category/${cat.path}`} key={cat.name}>

          <div className="category-card">

            <img src={cat.image} alt={cat.name} />

            <h3>{cat.name}</h3>

          </div>

        </Link>

      ))}

      </div>

    </section>
  );
}

export default Categories;