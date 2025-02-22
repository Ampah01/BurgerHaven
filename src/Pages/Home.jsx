import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import HomePage from "../Components/HomePage/HomePage";
import Homer from "../Components/HomePage/Homer";
import HomeAbout from "../Components/HomePage/HomeAbout";

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

      {showButton && (
        <button
          className="position-fixed bottom-0 end-0 m-4 rounded-circle p-3 shadow"
          onClick={scrollToTop}
          style={{ backgroundColor: "#9e3d45", color: "white", border: "none" }}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Home;
