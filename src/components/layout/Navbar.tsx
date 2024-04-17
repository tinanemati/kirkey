import React from "react";
import logo from "../../assets/krikey-logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <img
        width="50px"
        height="50px"
        className="logo-img"
        src={logo}
        alt="Logo"
      />
      <div className="item">
        <div>How to Animate</div>
        <KeyboardArrowDownIcon />
      </div>

      <div className="item">
        <div>Business</div>
        <KeyboardArrowDownIcon />
      </div>

      <div className="item">
        <div>Education</div>
        <KeyboardArrowDownIcon />
      </div>

      <div className="item">
        <div>Social Media</div>
        <KeyboardArrowDownIcon />
      </div>
      <div>Pricing</div>
      <div>About Us</div> 
    </nav>
  );
};

export default Navbar;
