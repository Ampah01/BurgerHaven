import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Carousel,
  Card,
} from "react-bootstrap";
import { motion } from "framer-motion"; 
import "./Homepage.css"; // Import the custom CSS file

const Homer = () => {
  const foodItems = [
    { src: "/images/burger.jpg", alt: "Wings" },
    { src: "/images/burger.jpg", alt: "Burger" },
    { src: "/images/burger.jpg", alt: "Tacos" },
    { src: "/images/burger.jpg", alt: "Dessert" },
  ];

  return (
    <div className="starter-section d-none d-sm-block">
      {/* Heading */}
      <Container className="text-center my-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="fw-bold"
        >
          Our Starters
        </motion.h2>
      </Container>

      {/* Grid layout for larger screens */}
      <section className="starter-packs">
        <Container>
          <Row className="g-4 justify-content-center">
            {foodItems.map((item, index) => (
              <Col xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="food-card">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fluid
                      className="food-image"
                    />
                    <Card.Body className="food-title">
                      <Card.Title>{item.alt}</Card.Title>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          <Button variant="dark" size="sm" className="order-btn mt-3 order">
            ORDER NOW
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Homer;
