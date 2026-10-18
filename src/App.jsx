import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const appStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CartProvider>
        <div style={appStyles}>
          <BrowserRouter>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CartProvider>
    </ThemeContext.Provider>
  );
}

export default App;