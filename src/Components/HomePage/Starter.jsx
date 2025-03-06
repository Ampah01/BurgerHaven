import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Homepage.css";

const Starter = () => {
  const navigate = useNavigate();

  const foodItems = [
    { src: "/images/starter.jpg", alt: "starters" },
    { src: "/images/burger.jpg", alt: "burgers" },
    { src: "/images/main.jpg", alt: "main" },
    { src: "/images/dessert.jpg", alt: "desserts" },
  ];

  return (
    <div className="starter-section d-none d-sm-block">
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
          <Button
            variant="dark"
            size="sm"
            className="order-btn mt-3 order"
            onClick={() => navigate("/order")} 
          >
            ORDER NOW
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Starter;
