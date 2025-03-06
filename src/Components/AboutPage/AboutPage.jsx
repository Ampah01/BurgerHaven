import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./AboutPage.css";

const About = () => {
  return (
    <Container fluid className="about-page py-5 ">
      <Row className="justify-content-center">
        {/* About Content Section */}
        <Col md={8} lg={6} className="text-center">
          <h4 className="text-center mb-3 texts">ABOUT</h4>
          <p className="lead">
            Welcome to <strong>BurgerHaven</strong>, where we craft
            mouthwatering gourmet burgers with fresh, locally sourced
            ingredients. Our handcrafted patties are grilled to perfection and
            served with crispy fries and signature sauces. Join us for a warm,
            welcoming dining experience with fast and friendly service!
          </p>
          <hr />

          {/* Contact Icons */}
          <div className="d-flex justify-content-center gap-4 my-2">
            <motion.a
              href="tel:+233200484457"
              className="text-dark fs-5 mx-3"
              whileHover={{ scale: 1.2 }}
            >
              <FaPhoneAlt />
            </motion.a>
            <motion.a
              href="https://maps.google.com/?q=Your+Restaurant+Address"
              target="_blank"
              className="text-dark fs-5 mx-3"
              whileHover={{ scale: 1.2 }}
            >
              <FaLocationDot />
            </motion.a>
            <motion.a
              href="mailto:info@burgerhaven.com"
              className="text-dark fs-5 mx-3"
              whileHover={{ scale: 1.2 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </Col>
      </Row>

      {/* Google Map Section */}
      <Row className="justify-content-center my-5 ">
        <Col md={10} lg={8}>
          <h4 className="text-center mb-3 texts">FIND US</h4>
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>

      {/* Business Hours */}
      <Row className="justify-content-center my-5">
        <Col md={6} className="text-center">
          <h4>HOURS</h4>
          <ul className="list-unstyled">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day, index) => (
              <li key={index} className="d-flex justify-content-between px-3">
                <span>{day}</span> <span>12pm - 10pm</span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
