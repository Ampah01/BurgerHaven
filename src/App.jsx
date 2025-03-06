import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Menus from "./Pages/Menus";
import Press from "./Pages/Press";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop"; 


function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/menu" element={<Menus />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
