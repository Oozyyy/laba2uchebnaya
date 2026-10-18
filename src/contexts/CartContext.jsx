import { createContext, useReducer } from "react";

export const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((_, index) => index !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  function addToCart(item) {
    dispatch({ type: "ADD", payload: item });
  }

  function removeFromCart(index) {
    dispatch({ type: "REMOVE", payload: index });
  }

  function clearCart() {
    dispatch({ type: "CLEAR" });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}