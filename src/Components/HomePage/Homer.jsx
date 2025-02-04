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
import "./Homepage.css"; // Import the custom CSS file

const Homer = () => {
  const foodItems = [
    { src: "/images/burger.jpg", alt: "Wings" },
    { src: "/images/burger.jpg", alt: "Burger" },
    { src: "/images/burger.jpg", alt: "Tacos" },
    { src: "/images/burger.jpg", alt: "Dessert" },
  ];

  return (
    <div className="starter-section">
      {/* Carousel for small screens */}
      <div className="d-none d-md-none carousel-container">
        <Carousel interval={3000} indicators={false} controls={true}>
          {foodItems.map((item, index) => (
            <Carousel.Item key={index} className="carousel-item-custom">
              <Card className="food-card">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fluid
                  className="food-image-carousel"
                />
                <Card.Body>
                  <Card.Title>{item.alt}</Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* Order button below the carousel */}
        <Button variant="dark" size="sm" className="order-btn">
          ORDER NOW
        </Button>
      </div>

      {/* Grid layout for larger screens */}
      <section className="starter-packs d-none d-sm-block">
        <Container>
          <Row className="g-4 justify-content-center">
            {foodItems.map((item, index) => (
              <Col xs={12} sm={6} md={3} key={index}>
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
              </Col>
            ))}
          </Row>
          <Button variant="dark" size="sm" className="order-btn">
            ORDER NOW
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Homer;
