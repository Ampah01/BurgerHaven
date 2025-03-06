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
    <div className="d-block d-md-none container py-3">
      <p className="testimonial-heading ">testimonials</p>
      <p className="text-danger ">We love...</p>

      {showVideo && (
        <div className="video-container slide-in">
          <video className="testimonial-video" controls>
            <source src="/video/file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="testimonial-text">
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
