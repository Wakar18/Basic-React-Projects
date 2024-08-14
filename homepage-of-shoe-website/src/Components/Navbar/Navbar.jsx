import React from "react";
import NikeLogo from "..//../assets/brand_logobrand_logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={NikeLogo} />
      <ul className="navbar-items">
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div className="btn-wrapper">
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
