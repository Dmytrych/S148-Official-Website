import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Order from "./pages/Order";
import WrapperPage from "./pages/WrapperPage";
import TopBar from "./components/TopBar";
import Products from "./pages/Products";
import CartContext from "./contexts/CartContext";
import { setLocalCart, getLocalCart } from "./repositories/cartRepository";
import Cart from "./pages/Cart";
import "./App.css"
import "./styles/shared.css"

function App() {
  const [cart, setCart] = useState({});

  const saveCart = (newCart) => {
    setLocalCart(newCart)
    setCart(newCart)
  }

  useEffect(() => {
    const currentCart = getLocalCart()
    if(currentCart){
      setCart(currentCart)
    }
  }, [])

  return (
    <>
      <ThemeProvider>
        <CartContext.Provider value={{cart, saveCart}}>
          <WrapperPage>
            <div className="app-top-bar">
              <TopBar/>
            </div>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/order" element={<Order/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/cart" element={<Cart/>} />
            </Routes>
          </WrapperPage>
        </CartContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
