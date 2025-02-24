import React, { useRef } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./DesktopCarousel.css";

const DesktopCarousel = () => {
  const carouselRef = useRef(null);

  const posts = [
    { type: "image", src: "/images/instagram1.jpg", quote: "Inspiration starts here ✨" },
    { type: "video", src: "/video/file4.mp4", quote: "Stay strong 💪" },
    { type: "image", src: "/images/instagram2.jpg", quote: "Happiness is homemade 😊" },
    { type: "image", src: "/images/instagram3.jpg", quote: "Dream big, work hard 🚀" },
    { type: "image", src: "/images/instagram4.jpg", quote: "Adventure awaits 🌍" },
    { type: "image", src: "/images/instagram5.jpg", quote: "Smile more, worry less 😄" },
    { type: "image", src: "/images/instagram6.jpg", quote: "Love the little things ❤️" },
    { type: "image", src: "/images/instagram7.jpg", quote: "Grateful for today 🙏" },
    { type: "image", src: "/images/instagram8.jpg", quote: "You got this! 💪🔥" },
    { type: "image", src: "/images/instagram9.jpg", quote: "Keep going, keep growing 🌱" },
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 310; 
      const container = carouselRef.current;
      
      if (direction === "next") {
        container.scrollLeft += scrollAmount;
      } else {
        container.scrollLeft -= scrollAmount;
      }
    }
  };

  return (
    <div className="desktop-carousel-container">
      <h3 className="desktop-carousel-title py-5">Follow us on Instagram</h3>
     
      <div className="desktop-carousel-wrapper">
        <button className="desktop-carousel-prev" onClick={() => scrollCarousel("prev")}>
          <FaChevronLeft />
        </button>
        <div className="desktop-carousel-track" ref={carouselRef}>
          {posts.map((post, index) => (
            <div className="desktop-carousel-item" key={index}>
              {post.type === "image" ? (
                <img src={post.src} alt={`Post ${index + 1}`} />
              ) : (
                <div className="video-container">
                  <video className="desktop-video" controls>
                    <source src={post.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <div className="desktop-quote">{post.quote}</div>
            </div>
          ))}
        </div>
        <button className="desktop-carousel-next" onClick={() => scrollCarousel("next")}>
          <FaChevronRight />
        </button>
      </div>
      <div className="desktop-carousel-line my-4"></div>
    </div>
  );
};

export default DesktopCarousel;
