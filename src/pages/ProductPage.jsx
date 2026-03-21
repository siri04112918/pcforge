import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductPage() {

  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{
      display:"flex",
      gap:"40px",
      padding:"50px"
    }}>

      <img src={product.image} width="350"/>

      <div>
        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p>{product.description}</p>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductPage;