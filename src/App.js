import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WrapperPage from "./pages/WrapperPage";
import "./App.css"
import TopBar from "./components/TopBar";
import { Container } from "@mui/system";

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
          </Routes>
        </WrapperPage>
      </ThemeProvider>
    </>
  );
}

export default App;
