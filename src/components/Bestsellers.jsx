import { products } from "../data/products";
import ProductCard from "./ProductCard";
import "./Bestsellers.css";

function Bestsellers(){

  const best = products.filter(p => p.bestseller);

  return(
    <section className="bestsellers">

      <h2>Best Sellers</h2>

      <div className="bestseller-grid">
        {best.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>

    </section>
  );
}

export default Bestsellers;