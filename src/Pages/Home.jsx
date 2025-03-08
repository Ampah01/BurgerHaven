import React, { useState, useEffect, lazy, Suspense } from "react";
import { FaArrowUp } from "react-icons/fa";
import HomePage from "../Components/HomePage/HomePage";
import Starter from "../Components/HomePage/Starter";
import HomeAbout from "../Components/HomePage/HomeAbout";
import "./Home.css";


const Testimonial = lazy(() => import("../Components/HomePage/Testimonial"));
const TestimonialTwo = lazy(() => import("../Components/HomePage/TestimonialTwo"));
const ConnectWithUs = lazy(() => import("../Components/HomePage/ConnectWithUs"));
const DesktopCarousel = lazy(() => import("../Components/HomePage/DesktopCarousel"));
const Wallpaper = lazy(() => import("../Components/HomePage/Wallpaper"));

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowButton(window.scrollY > 300);
      }, 100); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-light position-relative home">
      <HomePage />
      <Starter />
      <HomeAbout />

      {/* Suspense to prevent blocking */}
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonial />
        <TestimonialTwo />
      </Suspense>

      <Suspense fallback={<div>Loading Socials...</div>}>
        <ConnectWithUs />
      </Suspense>

      <Suspense fallback={<div>Loading Carousel...</div>}>
        <DesktopCarousel />
      </Suspense>

      <Suspense fallback={<div>Loading Wallpaper...</div>}>
        <Wallpaper />
      </Suspense>

      {showButton && (
        <button
          className="position-fixed bottom-0 end-0 m-4 rounded-circle p-3 shadow"
          onClick={scrollToTop}
          style={{ backgroundColor: "white", color: "black", border: "none" }}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Home;
