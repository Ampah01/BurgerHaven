import "./HomeAbout.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <div className="homeabout">
      <div className="image-container"></div>

      <div className="overlay">
        <div className="content">
          <h2>ABOUT</h2>
          <p className="text">0ur restaurant</p>
          <div className="divider"></div>

          <div className="contact-icons">
            <Container className="text-center mt-2">
              <motion.a
                href="tel:+2122601212"
                className="social-icon mx-3"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <FaPhoneAlt />
              </motion.a>

              <motion.a
                href="https://maps.google.com/?q=Your+Restaurant+Address"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon mx-3"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <FaLocationDot />
              </motion.a>

              <motion.a
                href="mailto:info@burgurhaven.com"
                className="social-icon mx-3"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <FaEnvelope />
              </motion.a>
            </Container>
          </div>

          <h4 className="section-title">HOURS</h4>
          <div className="dates-available">
            <p>
              <span className="day">Monday</span>{" "}
              <span className="time">12pm - 9pm</span>
            </p>
            <p>
              <span className="day">Tuesday</span>{" "}
              <span className="time">12pm - 9pm</span>
            </p>
            <p>
              <span className="day">Wednesday</span>{" "}
              <span className="time">12pm - 10pm</span>
            </p>
            <p>
              <span className="day">Thursday</span>{" "}
              <span className="time">12pm - 10pm</span>
            </p>
            <p>
              <span className="day">Friday</span>{" "}
              <span className="time">12pm - 10pm</span>
            </p>
            <p>
              <span className="day">Saturday</span>{" "}
              <span className="time">12pm - 10pm</span>
            </p>
            <p>
              <span className="day">Sunday</span>{" "}
              <span className="time">12pm - 10pm</span>
            </p>
          </div>

          <h4 className="section-title">PHONE</h4>
          <p>212.260.1212</p>
          <p>212.260.7049</p>

          <div className="about-button-container">
            <button className="about-button">About Us</button>
          </div>
        </div>
      </div>

      <div className="overlay-left">
        <div className="content">
          <div className="about-overlay">
            <h2>ORDER</h2>
            <p className="subtitle">pick-up & delivery</p>
            <hr />
            <div className="order-section">
              <h3>CONTACTLESS TAKE-OUT</h3>
              <p>
                To place an order for pickup, please order via{" "}
                <a href="#">Square</a>.
              </p>
              <button>ORDER PICKUP</button>
            </div>
            <div className="order-section">
              <h3>DELIVERY EXPANDED</h3>
              <p>
                To place an order for delivery, please choose from one of our
                partners below:
              </p>
              <p className="partners">
                <a href="#">Postmates</a>, <a href="#">GrubHub</a>,
                <a href="#">Seamless</a> & <a href="#">UberEats</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
