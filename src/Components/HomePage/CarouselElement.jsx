import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import videoFile from "../../../public/video/file4.mp4";
import videoFile2 from "../../../public/video/file2.mp4";
import videoFile3 from "../../../public/video/file3.mp4";
import "./CarouselElement.css";

const CarouselElement = () => {
  const [playing, setPlaying] = useState({});

  const handlePlay = (index) => {
    const video = document.getElementById(`video-${index}`);
    if (video) {
      video.play();
      setPlaying((prev) => ({ ...prev, [index]: true }));
    }
  };

  useEffect(() => {
    const carousel = document.getElementById("videoCarousel");

    if (carousel) {
      carousel.addEventListener("touchstart", (e) => e.stopPropagation(), { passive: true });
      carousel.addEventListener("touchmove", (e) => e.stopPropagation(), { passive: true });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("touchstart", (e) => e.stopPropagation());
        carousel.removeEventListener("touchmove", (e) => e.stopPropagation());
      }
    };
  }, []);

  return (
    <div
      id="videoCarousel"
      className="carousel slide d-block d-sm-none"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="video-wrapper position-relative">
            <video id="video-1" className="d-block w-100" controls={playing[1]}>
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!playing[1] && (
              <button className="play-button" onClick={() => handlePlay(1)}>
                <FaPlay />
              </button>
            )}
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/instagram1.jpg" className="d-block w-100" alt="Image 1" />
        </div>

        <div className="carousel-item">
          <div className="video-wrapper position-relative">
            <video id="video-2" className="d-block w-100" controls={playing[2]}>
              <source src={videoFile2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!playing[2] && (
              <button className="play-button" onClick={() => handlePlay(2)}>
                <FaPlay />
              </button>
            )}
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/instagram2.jpg" className="d-block w-100" alt="Image 2" />
        </div>

        <div className="carousel-item">
          <div className="video-wrapper position-relative">
            <video id="video-3" className="d-block w-100" controls={playing[3]}>
              <source src={videoFile3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!playing[3] && (
              <button className="play-button" onClick={() => handlePlay(3)}>
                <FaPlay />
              </button>
            )}
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/instagram3.jpg" className="d-block w-100" alt="Image 3" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default CarouselElement;
