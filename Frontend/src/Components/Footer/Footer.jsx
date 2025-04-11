
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={3} sm={12} className="footer-section mb-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-description">
              SkillSphere is a learning platform empowering students with skills that matter. We aim to bridge the gap between knowledge and application.
            </p>
          </Col>

          <Col md={3} sm={6} className="footer-section mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="footer-section mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p>Email: support@skillsphere.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Pune, Maharashtra, India</p>
          </Col>

          <Col md={3} sm={12} className="footer-section mb-4 text-center">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons justify-content-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn github">
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>
        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
        <div className="text-center footer-text">
          &copy; 2024 <span className="brand">SkillSphere</span>. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
