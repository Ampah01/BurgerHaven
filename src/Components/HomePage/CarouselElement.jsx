import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Explicit Import
import "./CarouselElement.css";

const CarouselElement = () => {
  const [playing, setPlaying] = useState({});

  const handlePlay = (index) => {
    const video = document.getElementById(`video-${index}`);
    if (video) {
      video.play();
      video.addEventListener("playing", () => {
        setPlaying((prev) => ({ ...prev, [index]: true }));
      });
    }
  };

  useEffect(() => {
    const carouselElement = document.getElementById("videoCarousel");
    if (carouselElement) {
      new Bootstrap.Carousel(carouselElement, { interval: 5000, ride: "carousel" }); // ✅ Fix Here
    }
  }, []);

  return (
    <div id="videoCarousel" className="carousel slide d-block d-sm-none" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Video 1 */}
        <div className="carousel-item active">
          <div className="video-wrapper position-relative">
            <video id="video-1" className="d-block w-100" controls={playing[1]}>
              <source src="/video/file4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!playing[1] && (
              <button className="play-button" onClick={() => handlePlay(1)}>
                <FaPlay />
              </button>
            )}
          </div>
        </div>

        {/* Image 1 */}
        <div className="carousel-item">
          <img src="/images/instagram1.jpg" className="d-block w-100" alt="Image 1" />
        </div>

        {/* Video 2 */}
        <div className="carousel-item">
          <div className="video-wrapper position-relative">
            <video id="video-2" className="d-block w-100" controls={playing[2]}>
              <source src="/video/file2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!playing[2] && (
              <button className="play-button" onClick={() => handlePlay(2)}>
                <FaPlay />
              </button>
            )}
          </div>
        </div>

        {/* Image 2 */}
        <div className="carousel-item">
          <img src="/images/instagram2.jpg" className="d-block w-100" alt="Image 2" />
        </div>

        {/* Video 3 */}
        <div className="carousel-item">
          <div className="video-wrapper position-relative">
            <video id="video-3" className="d-block w-100" controls={playing[3]}>
              <source src="/video/file3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!playing[3] && (
              <button className="play-button" onClick={() => handlePlay(3)}>
                <FaPlay />
              </button>
            )}
          </div>
        </div>

        {/* Image 3 */}
        <div className="carousel-item">
          <img src="/images/instagram3.jpg" className="d-block w-100" alt="Image 3" />
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselElement;
