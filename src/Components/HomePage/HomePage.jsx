import React, { useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.querySelector(".homepage").style.backgroundPosition = `center ${
        scrollPosition * 0.7
      }px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="homepage">
        <h1>Welcome to Our Homepage</h1>
      </div>

    
    </>
  );
};

export default HomePage;
