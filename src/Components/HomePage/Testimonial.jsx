import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import yelp from "../../../public/images/yelp.png";
import tripadvisor from "../../../public/images/tripadvisor.png";
import happycow from "../../../public/images/happycow.jpg";
import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    logo: yelp,
    quote: "It surpassed all my expectations!",
    review:
      "The food looks like it has been prepared for a culinary magazine. While in New York City add Red Bamboo as a culinary experience. It will be a good place to take a date to or get together with some friends. You will not be disappointed.",
  },
  {
    id: 2,
    logo: tripadvisor,
    quote: "Best vegetarian restaurant... EVER",
    review:
      "I absolutely love this place. The Wings are the best things ever!!! I've been a veggie for 22 years now and never had wings, Philly Cheese steak etc so to get all this as a veggie option is fantastic! I go to this place every time I'm in New York :)",
  },
  {
    id: 3,
    logo: happycow,
    quote: "Delicious food, good prices",
    review:
      "Very nice, cozy place. Service was good, food delicious and so much to choose from :) Wanna go there again. Pros: Good price, Good food, Cozy place and nice staff.",
  },
];

const Testimonial = () => {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState({}); 
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setVisible(false), 1500); 
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setClicked((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setClicked((prev) => ({ ...prev, [id]: false }));
    }, 1500);
  };

  return (
    <div ref={sectionRef} className="p-4 py-5 d-none d-md-block">
      <div className="row">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-md-4 d-flex">
            <div
              className="card text-center border-0 shadow-sm p-5 d-flex flex-column justify-content-between"
              style={{ minHeight: "450px" }}
            >
              <img
                src={testimonial.logo}
                alt="logo"
                className={`mx-auto mb-3 ${
                  visible || clicked[testimonial.id] ? "rotate-image" : ""
                }`}
                onClick={() => handleClick(testimonial.id)}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
              <h5 className="fw-semibold fs-md-1 text" style={{ color: "#9e3d45" }}>
                {testimonial.quote}
              </h5>
              <p className="text-muted">{testimonial.review}</p>
              <h1 className="text-dark fs-1">”</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
