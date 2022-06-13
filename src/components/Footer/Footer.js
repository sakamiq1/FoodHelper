import React from "react";
import logo from "../../assets/logo.png";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <img src={logo} alt="logo-image" />
      </div>
      <div className="contact-container">
        <h3>Special deals</h3>
        <p>Wedding foods</p>
        <p>Wedding foods</p>
        <p>Wedding foods</p>
      </div>
      <div className="contact-container">
        <h3>Special deals</h3>
        <p>Wedding foods</p>
        <p>Wedding foods</p>
        <p>Wedding foods</p>
      </div>
      <div className="contact-container">
        <h3>Special deals</h3>
        <p>Wedding foods</p>
        <p>Wedding foods</p>
        <p>Wedding foods</p>
      </div>
    </div>
  );
};

export default Footer;
