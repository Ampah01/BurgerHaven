import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Desktop */}
      <footer className="footer bg-dark py-5 d-none d-md-block">
        <div className="container text-center">
          <h2 className="footer-title text-center">BURGERHAVEN</h2>
          <p className="footer-address text-center text-white">
            ACCRA EAST LEGON | ACCRA 101
          </p>
          <p className="footer-contacts text-center text-white">
            020.048.4457 | 027.124.9156
          </p>

          <div className="footer-nav my-3">
            <Link to="/" className="footer-links px-2">
              ACCRA EAST
            </Link>
            <Link to="/" className="footer-links px-2">
              HOME
            </Link>
            <Link to="/order" className="footer-links px-2">
              ORDER
            </Link>
            <Link to="/gift-cards" className="footer-links px-2">
              GIFT CARDS
            </Link>
            <Link to="/about" className="footer-links px-2">
              ABOUT
            </Link>
            <Link to="/contact" className="footer-links px-2">
              CONTACT
            </Link>
            <Link to="/press" className="footer-links px-1">
              PRESS
            </Link>
          </div>

          <div className="footer-icons my-3 ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-circle p-2 mx-2"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-circle p-2 mx-2"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-circle p-2 mx-2"
            >
              <FaInstagram size={18} />
            </a>
          </div>

          <p className="footer-copy text-center text-white">
            © {currentYear} Burgerhaven - All Rights Reserved
          </p>
          <p className="footer-designer text-center text-white">
            Web and Menu Designs by{" "}
            <a
              href="https://my-portfolio-lac-rho.vercel.app/"
              className="footer-link"
            >
              Samuel Ampah
            </a>
          </p>
        </div>
      </footer>

      {/* Mobile View */}
      <footer className="footer bg-dark text-white py-3 d-block d-md-none">
        <div className="container text-center title">
          <p className="footer-title">BURGERHAVEN</p>
          <p className="footer-address">ACCRA EAST LEGON</p>
          <hr className="footer-divider" />
          <p className="footer-contacts">020.048.4457 | 027.124.9156</p>
          <div className="footer-icons my-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-circle p-1 m-2"
            >
              <FaFacebookF size={15} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-circle p-1 m-2"
            >
              <FaTwitter size={15} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-circle p-1 m-2"
            >
              <FaInstagram size={15} />
            </a>
          </div>
          <div className="foot-last">
            <p className="footer-copy">
              © {currentYear} Burgerhaven - All Rights Reserved
            </p>
            <p className="footer-designer">
              Web and Menu Designs by{" "}
              <a
                href="https://my-portfolio-lac-rho.vercel.app/"
                className="footer-link"
              >
                Samuel Ampah
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
