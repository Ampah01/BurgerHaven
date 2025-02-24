import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./HomeAbout.css";

const Social = () => {
  return (
    <>
      <div className="social-icons-container d-block d-sm-none text-start mt-10">
        <h4>connect with us</h4>
        <div className="d-flex justify-content-start gap-3 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark rounded-circle p-3"
          >
            <FaFacebookF size={24} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark rounded-circle p-3"
          >
            <FaTwitter size={24} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark rounded-circle p-3"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="mt-5 ">follow us on instagram</p>
      </div>
    </>
  );
};

export default Social;
