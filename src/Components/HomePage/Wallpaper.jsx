import React, { useEffect, useState } from "react";
import "./Wallpaper.css";

const Wallpaper = () => {
  const [backgroundSize, setBackgroundSize] = useState(100);

  useEffect(() => {
    const updateImage = () => {
      const scrollY = window.pageYOffset;
      setBackgroundSize(120 + scrollY / 100);
    };

    window.addEventListener("scroll", updateImage);
    return () => window.removeEventListener("scroll", updateImage);
  }, []);

  return (
    <div
      className="wallpaper d-none d-md-block"
      style={{
        backgroundSize: `${backgroundSize}%`,
      }}
    ></div>
  );
};

export default Wallpaper;
