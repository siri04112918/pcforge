function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="cart-item">

      <img src={item.image} alt={item.name} />

      <div className="cart-info">
        <h4>{item.name}</h4>
        <p className="price">₹{item.price}</p>

        <div className="cart-actions">

          <button
            className="icon-btn"
            onClick={() => onRemove(item.id)}
          >
            🗑
          </button>

          <div className="qty-box">
            <button onClick={() => onDecrease(item.id)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => onIncrease(item.id)}>+</button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default CartItem;