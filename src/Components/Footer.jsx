import React from "react";
import { BsCCircle } from "react-icons/bs";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        2025 <BsCCircle size={"10px"} className="icon" /> Velzon
      </div>
      <div className="right">
        Design & Develop by Themesbrand
      </div>
    </div>
  );
};

export default Footer;
