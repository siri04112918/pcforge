import { useLocation } from "react-router-dom";
import { useState } from "react";
import ProductList from "../components/ProductList";
import "./Shop.css";

function Shop() {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";


  const [category, setCategory] = useState("all");
  const [brands, setBrands] = useState([]);
  const [sort, setSort] = useState("default");

  
  const handleBrand = (brand, e) => {
    if (e.target.checked) {
      setBrands([...brands, brand]);
    } else {
      setBrands(brands.filter((b) => b !== brand));
    }
  };

  return (
    <div className="shop-page">

      
      <div className="filters">

        <h3>Filters</h3>

        
        <div className="filter-section">
          <p>Category</p>

          <label>
            <input type="radio" name="cat" onChange={() => setCategory("all")} />
            All
          </label>

          <label>
            <input type="radio" name="cat" onChange={() => setCategory("mouse")} />
            Mouse
          </label>

          <label>
            <input type="radio" name="cat" onChange={() => setCategory("keyboard")} />
            Keyboard
          </label>

          <label>
            <input type="radio" name="cat" onChange={() => setCategory("monitor")} />
            Monitor
          </label>
        </div>

        <div className="filter-section">
          <p>Brand</p>

          <label>
            <input type="checkbox" onChange={(e) => handleBrand("Logitech", e)} />
            Logitech
          </label>

          <label>
            <input type="checkbox" onChange={(e) => handleBrand("Razer", e)} />
            Razer
          </label>

          <label>
            <input type="checkbox" onChange={(e) => handleBrand("HP", e)} />
            HP
          </label>
        </div>

        <div className="filter-section">
          <p>Sort By</p>

          <select onChange={(e) => setSort(e.target.value)}>
            <option value="default">Default</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
          </select>
        </div>

      </div>

      
      <div className="shop-content">
        <ProductList
          search={search}
          category={category}
          brands={brands}
          sort={sort}
        />
      </div>

    </div>
  );
}

export default Shop;