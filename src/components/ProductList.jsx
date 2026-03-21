import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import "./Product.css";

function ProductList() {

  const { category } = useParams();

  const filteredProducts = category
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <div className="products-container">

      {filteredProducts.length === 0 ? (
        <h2>No products found</h2>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}

    </div>
  );
}

export default ProductList;