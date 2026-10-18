import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";

const products = [
  { id: 1, name: "ПНВ", price: 99000 },
  { id: 2, name: "Плитник", price: 49000 },
  { id: 3, name: "Наушники", price: 19000 },
  { id: 4, name: "Шлем", price: 27000 },
  { id: 5, name: "Прицел", price: 56000 },
  { id: 6, name: "Очки", price: 11000 },
];

function Catalog() {
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  function handleAdd(product) {
    addToCart(product);
  }

  const cardStyle = {
    border: `1px solid ${theme === "dark" ? "#777" : "#ccc"}`,
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
  };

  return (
    <div>
      <h1>Каталог товаров</h1>
      {products.map((product) => (
        <div key={product.id} style={cardStyle}>
          <h3>{product.name}</h3>
          <p>Цена: {product.price} ₽</p>
          <button onClick={() => handleAdd(product)}>В корзину</button>
          <button
            onClick={() => {
              handleAdd(product);
              navigate("/cart");
            }}
            style={{ marginLeft: "10px" }}
          >
            Купить и перейти в корзину
          </button>
        </div>
      ))}
    </div>
  );
}

export default Catalog;