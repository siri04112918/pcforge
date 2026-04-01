import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { useParams, useLocation } from "react-router-dom";
import "./Product.css";

function ProductList() {

  const { category } = useParams();
  const location = useLocation();

  
  const searchQuery =
    new URLSearchParams(location.search).get("search")?.toLowerCase() || "";

  
  const filteredProducts = products.filter((product) => {

    
    const matchesCategory = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true;

  
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery) ||
      (product.desc && product.desc.toLowerCase().includes(searchQuery));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="section-header-center">

      <h2>
        {category
          ? `${category.toUpperCase()} PRODUCTS`
          : searchQuery
          ? `Results for "${searchQuery}"`
          : "Explore Products"}
      </h2>

      <span className="underline"></span>
      <p>Find the best gear for your setup</p>

      <div className="products-grid">

        {filteredProducts.length === 0 ? (
          <h2>No products found </h2>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}

      </div>
    </div>
  );
}

export default ProductList;