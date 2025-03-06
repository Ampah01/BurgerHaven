import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6 mb-5">
          <h4>Get in Touch</h4>
          <p>
            We'd love to hear from you! Fill out the form below or reach out
            directly.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn" style={{ backgroundColor: "#722f37", color: "white" }}>
              Send Message
            </button>
          </form>
        </div>
        <div className="col-md-6 location">
          <h4>Our Location</h4>
          <p>EAST LEGON, ACCRA GHANA, ST 12345</p>
          <p>
            <strong>Phone:</strong> (020) 048-4457
          </p>
          <p>
            <strong>Email:</strong> burgerhaven@restaurant.com
          </p>
          <iframe
            title="Google Map"
            className="w-100"
            height="300"
            src="https://www.google.com/maps/embed?..."
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {showPopup && (
        <div className="alert alert-success position-fixed bottom-0 end-0 m-3" role="alert">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;
