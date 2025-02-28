import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import HomePage from "../Components/HomePage/HomePage";
import Homer from "../Components/HomePage/Homer";
import HomeAbout from "../Components/HomePage/HomeAbout";
import Testimonial from "../Components/HomePage/Testimonial";
import TestimonialTwo from "../Components/HomePage/TestimonialTwo";
import Footer from "../Components/Footer/Footer";
import ConnectWithUs from "../Components/HomePage/ConnectWithUs";
import DesktopCarousel from "../Components/HomePage/DesktopCarousel";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-light position-relative">
      <HomePage />
      <Homer />
      <HomeAbout />
      <Testimonial />
      <TestimonialTwo />
      <ConnectWithUs />
      <DesktopCarousel />
      <Footer />
      
      {showButton && (
        <button
          className="position-fixed bottom-0 end-0 m-4 rounded-circle p-3 shadow"
          onClick={scrollToTop}
          style={{ backgroundColor: "white ", color: "black", border: "none" }}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Home;
