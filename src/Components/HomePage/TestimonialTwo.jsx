import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialTwo.css";

const TestimonialTwo = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="d-block d-md-none container  py-5">
      <p className="testimonial-heading fade-in">testimonials</p>
      <p className="text-danger fade-in">We love...</p>

      {showVideo && (
        <div className="video-container slide-in">
          <iframe
            className="testimonial-video"
            src="/video/file.mp4"
            title="Testimonial Video"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="testimonial-text fade-in">
        <blockquote className="blockquote">
          <p>
            "I love their Chicken Parmesan. It tastes just like chicken but it’s
            all soy!"
          </p>
          <footer className="blockquote-footer">Janet Jackson</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialTwo;
