import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Products from "./pages/Products";
import CartContext from "./contexts/CartContext";
import { setLocalCart, getLocalCart } from "./repositories/cartRepository";
import Cart from "./pages/Cart";
import "./App.css"
import "./styles/colors.css"
import ProductDetails from "./pages/ProductDetails";
import AppTopBar from "./components/AppTopBar";

function App() {
  const [appDidMount] = useState(false)
  const [cart, setCart] = useState([]);

  const saveCart = (newCart) => {
    setLocalCart(newCart)
    setCart(newCart)
  }

  useEffect(() => {
    if (appDidMount) {
      const currentCart = getLocalCart()
      if (currentCart) {
        setCart(currentCart)
      }
    }
  }, [appDidMount])

  return (
    <div className="light-theme" style={{ display: "flex", flexDirection: "column" }}>
      <CartContext.Provider value={{ cart, saveCart }}>
        <AppTopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
