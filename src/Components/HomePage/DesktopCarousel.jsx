import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./DesktopCarousel.css";

const DesktopCarousel = () => {
  const carouselRef = useRef(null);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const posts = [
    {
      type: "image",
      src: "/images/instagram1.jpg",
      quote: "Savor the flavor of every bite 🍔",
    },
    {
      type: "video",
      src: "/video/instagram3.mp4",
      quote: "Juicy, cheesy, and oh-so-tasty! 🍔🔥",
    },
    {
      type: "image",
      src: "/images/instagram2.jpg",
      quote: "Good food, good mood 😋",
    },
    {
      type: "image",
      src: "/images/instagram3.jpg",
      quote: "Every burger tells a story 🍔📖",
    },
    {
      type: "image",
      src: "/images/instagram4.jpg",
      quote: "Fresh ingredients, bold flavors! 🌿🔥",
    },
    {
      type: "video",
      src: "/video/instagram4.mp4",
      quote: "One bite, and you're hooked 🍔🤤",
    },
    {
      type: "image",
      src: "/images/instagram5.jpg",
      quote: "Where every meal is a masterpiece 🎨🍔",
    },
    {
      type: "video",
      src: "/video/instagram5.mp4",
      quote: "Burgers made with love ❤️",
    },
    {
      type: "image",
      src: "/images/instagram8.jpg",
      quote: "The best memories are made around the table 🍽️",
    },
    {
      type: "video",
      src: "/video/instagram6.mp4",
      quote: "Taste the perfection 🍔🔥",
    },
  ];

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 310;
      const container = carouselRef.current;
      direction === "next"
        ? (container.scrollLeft += scrollAmount)
        : (container.scrollLeft -= scrollAmount);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="desktop-carousel-container d-none d-md-block">
      <h3 className="desktop-carousel-title py-5">Follow us on Instagram</h3>

      <div className="desktop-carousel-wrapper">
        <button
          className="desktop-carousel-prev"
          onClick={() => scrollCarousel("prev")}
        >
          <FaChevronLeft />
        </button>
        <div className="desktop-carousel-track" ref={carouselRef}>
          {posts.map((post, index) => (
            <div className="desktop-carousel-item" key={index}>
              {post.type === "image" ? (
                <img src={post.src} alt={`Post ${index + 1}`} />
              ) : (
                <div className="video-container">
                  <video
                    className="desktop-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={post.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <div className="desktop-quote">{post.quote}</div>
            </div>
          ))}
        </div>
        <button
          className="desktop-carousel-next"
          onClick={() => scrollCarousel("next")}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="desktop-carousel-line my-4"></div>

      <Container className="py-2 video-cont">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <div className="position-relative">
              <div className="video-container">
                <video
                  ref={videoRef}
                  className="testimonial-video"
                  src="/video/file.mp4"
                  title="Janet Jackson testimonial video"
                  allowFullScreen
                  controls
                  onPlay={() => setIsPlaying(true)}
                ></video>
              </div>

              {!isPlaying && (
                <div className="overlay-text">
                  <p title="The Tonight Show">THE TONIGHT SHOW</p>
                  <button className="play" onClick={handlePlay}>
                    <FaPlay className="icon-play" />
                  </button>
                </div>
              )}
            </div>
          </Col>
          <Col md={6}>
            <p className="testimonial-heading display">testimonials</p>
            <p className="text-danger fs-4">We love...</p>
            <blockquote className="blockquote">
              <p>
                "I love their Chicken Parmesan. It tastes just like chicken but
                it’s all soy!"
              </p>
              <footer className="blockquote-footer">Janet Jackson</footer>
            </blockquote>
            <Button variant="outline-dark">MORE PRESS</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DesktopCarousel;
