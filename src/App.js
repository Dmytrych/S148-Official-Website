import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Order from "./pages/Order";
import WrapperPage from "./pages/WrapperPage";
import "./App.css"
import TopBar from "./components/TopBar";
import Products from "./pages/Products";

function App() {

  return (
    <>
      <ThemeProvider>
        <WrapperPage>
          <div className="app-top-bar">
            <TopBar/>
          </div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/order" element={<Order/>} />
            <Route path="/products" element={<Products/>} />
          </Routes>
        </WrapperPage>
      </ThemeProvider>
    </>
  );
}

export default App;
