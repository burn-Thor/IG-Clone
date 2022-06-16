import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import HeaderBanner from "./components/Header";
import FooterBanner from "./components/Footer";
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home";
import Breeds from "./pages/Breeds";
import Benagls from "./pages/Bengals";
// style
import { TheApp } from "./css/App.styled";
import Cats from "./pages/Cats";

// App
const App = () => {
  // Now the App
  return (
    <TheApp>
      <HeaderBanner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Breeds" element={<Breeds />} />
          <Route path="/Bengals" element={<Benagls />} />
          <Route path="/Cats" element={<Cats />} />
        </Routes>{" "}
        <FooterBanner />
      </BrowserRouter>
    </TheApp>
  );
};

export default App;
