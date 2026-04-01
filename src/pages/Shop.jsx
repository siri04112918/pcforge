import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";
import "./Shop.css";

function Shop() {
  const location = useLocation();


  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";

  return (
    <div className="shop-page">

      <div className="shop-header"></div>

      <div className="shop-content">
        
        <ProductList search={search} />
      </div>

    </div>
  );
}

export default Shop;