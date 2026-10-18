import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const rowStyle = {
    borderBottom: `1px solid ${theme === "dark" ? "#777" : "#ccc"}`,
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div>
      <h1>Корзина</h1>

      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={rowStyle}>
              <span>
                {item.name} — {item.price} ₽
              </span>
              <button onClick={() => removeFromCart(index)}>Удалить</button>
            </div>
          ))}

          <h2>Итого: {total} ₽</h2>
          <button onClick={clearCart}>Очистить корзину</button>
        </>
      )}
    </div>
  );
}

export default Cart;