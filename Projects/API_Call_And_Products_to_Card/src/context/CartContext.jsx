import { createContext, useState } from "react";

export const MyCart = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const value = { cartItems, setCartItems, quantity, setQuantity };

  return <MyCart.Provider value={value}>{children}</MyCart.Provider>;
};
