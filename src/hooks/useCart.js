import { useContext } from "react";
import  CartContext  from "../contexts/CartContext.jsx"; // Fixed the import path

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    console.warn("useCart must be used within a CartProvider");
    return { cart: [], addToCart: () => {}, removeFromCart: () => {} }; // Default values
  }
  return context;
};

export default useCart;
