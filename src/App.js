import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

// Components
import HeaderBanner from "./components/Header";
import FooterBanner from "./components/Footer";
import Navbar from "./components/Navbar";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// style
import { TheApp } from "./css/App.styled";
//

const App = () => {
  // Now the App
  return (
    <TheApp>
      <HeaderBanner />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <FooterBanner />
      </BrowserRouter>
    </TheApp>
  );
};

export default App;
