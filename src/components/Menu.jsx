import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Menu() {
  const { theme, toggleTheme } = useContext(ThemeContext);


  const baseLinkStyle = {
    color: theme === "dark" ? "#fff" : "#000",
    marginRight: "10px",
    textDecoration: "none"
  };

  const activeLinkStyle = {
    color: "red",
    fontWeight: "bold"
  };

  return (
    <nav style={{ marginBottom: "20px", padding: "10px" }}>
      <NavLink 
        to="/" 
        end 
        style={({ isActive }) => isActive ? { ...baseLinkStyle, ...activeLinkStyle } : baseLinkStyle}
      >
        Главная
      </NavLink>
      
      <NavLink 
        to="/catalog" 
        style={({ isActive }) => isActive ? { ...baseLinkStyle, ...activeLinkStyle } : baseLinkStyle}
      >
        Каталог
      </NavLink>
      
      <NavLink 
        to="/cart" 
        style={({ isActive }) => isActive ? { ...baseLinkStyle, ...activeLinkStyle } : baseLinkStyle}
      >
        Корзина
      </NavLink>
      
      <NavLink 
        to="/login" 
        style={({ isActive }) => isActive ? { ...baseLinkStyle, ...activeLinkStyle } : baseLinkStyle}
      >
        Войти
      </NavLink>

      <button onClick={toggleTheme} style={{ marginLeft: "20px", cursor: "pointer" }}>
        Переключить тему ({theme})
      </button>
    </nav>
  );
}

export default Menu;