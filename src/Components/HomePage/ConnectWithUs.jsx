import React from "react";
import "./ConnectWithUs.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ConnectWithUs = () => {
  return (
    <div className="connect-section  d-none d-md-block">
      <div className="overlay-connect">
        <h2 className="text-center">connect with us</h2>
        <div className="social-icons d-flex justify-content-center">
          <a
            href="https://facebook.com"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
