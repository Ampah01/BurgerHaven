import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Container } from "react-bootstrap";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <Container className="social-icons-container d-block d-lg-none text-center mt-2">
    <motion.a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon mx-3"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <FaFacebookF size={20} />
    </motion.a>
  
    <motion.a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon mx-3"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <FaTwitter size={20} />
    </motion.a>
  
    <motion.a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon mx-3"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >
      <FaInstagram size={20} />
    </motion.a>
  </Container>
  
  );
};

export default SocialMedia;
