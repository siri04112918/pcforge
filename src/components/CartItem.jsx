<div key={item.id} className="cart-item">

  <img src={item.image} alt={item.name} />

  <div className="cart-item-info">
    <p>{item.name}</p>
    <p>₹{item.price}</p>

    <div className="qty-controls">

      <button onClick={() => decreaseQty(item.id)}>
        🗑
      </button>

      <span>{item.qty}</span>

      <button onClick={() => increaseQty(item.id)}>
        +
      </button>

    </div>

  </div>

</div>
