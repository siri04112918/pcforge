import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { useParams, useLocation } from "react-router-dom";
import "./Product.css";

function ProductList({ category: selectedCategory, brands = [], sort = "default" }) {

  const { category } = useParams();
  const location = useLocation();


  const searchQuery =
    new URLSearchParams(location.search).get("search")?.toLowerCase() || "";

  let filteredProducts = products
    .filter((product) => {

      const matchesCategory =
        selectedCategory && selectedCategory !== "all"
          ? product.category.toLowerCase() === selectedCategory.toLowerCase()
          : category
          ? product.category.toLowerCase() === category.toLowerCase()
          : true;

      
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery) ||
        (product.desc &&
          product.desc.toLowerCase().includes(searchQuery));

      
      const matchesBrand =
        brands.length === 0 ? true : brands.includes(product.brand);

      return matchesCategory && matchesSearch && matchesBrand;
    });

  if (sort === "low-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  } else if (sort === "high-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <div className="section-header-center">

     
      <h2>
        {selectedCategory && selectedCategory !== "all"
          ? `${selectedCategory.toUpperCase()} PRODUCTS`
          : category
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