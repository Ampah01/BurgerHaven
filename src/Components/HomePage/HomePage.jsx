import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const homepage = document.querySelector(".homepage");
          if (homepage) {
            const scrollPosition = window.scrollY;
            homepage.style.backgroundPosition = `center calc(50% + ${scrollPosition * 0.3}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1 className="homepage-title">
          <span className="burger-text">Burger</span>
          <span className="haven-text">Haven</span>
        </h1>
        <p className="homepage-tagline">
          Where every bite is a taste of heaven! 🍔✨
        </p>
        <div className="d-block d-sm-none">
          <Button variant="dark" size="sm" className="order-btn" onClick={() => navigate("/order")}>
            ORDER NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
