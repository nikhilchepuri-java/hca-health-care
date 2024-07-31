import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-hero">
        <h3>HCA Houston Healthcare</h3>
        <div>HCA Houston Healthcare</div>
        <div>3737 Buffalo, sppedway</div>
        <div>Suite 1400</div>
        <div>Houston, TX 77098</div>
      </div>
      <div className="footer-about">
        <div>About Us</div>
        <a>About HCA Houston</a>
        <a>Phone Directory</a>
        <a>Maps & Directions</a>
        <a>Media Center</a>
        <a>Count Us</a>
      </div>
    </div>
  );
};

export default Footer;
