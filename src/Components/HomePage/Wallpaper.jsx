import React, { useEffect, useState } from "react";
import "./Wallpaper.css";

const Wallpaper = () => {
  const [backgroundSize, setBackgroundSize] = useState(100);

  useEffect(() => {
    let animationFrame;

    const updateImage = () => {
      animationFrame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setBackgroundSize(120 + scrollY / 100);
      });
    };

    window.addEventListener("scroll", updateImage);

    return () => {
      window.removeEventListener("scroll", updateImage);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="wallpaper d-none d-md-block d-flex text-white"
      style={{
        backgroundSize: `${backgroundSize}%`,
      }}
    >
      <h1 className="display-3 fw-bold fadeIn">Le restaurant de hamburgers</h1>
    </div>
  );
};

export default Wallpaper;
