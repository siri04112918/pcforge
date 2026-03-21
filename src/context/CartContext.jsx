import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {

    const existing = cart.find(item => item.id === product.id);

    if(existing){
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    }
    else{
      setCart([...cart, { ...product, qty: 1 }]);
    }

    setIsCartOpen(true);
  };

  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      ).filter(item => item.qty > 0)
    );
  };

  const total = cart.reduce(
    (sum,item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      increaseQty,
      decreaseQty,
      total,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);