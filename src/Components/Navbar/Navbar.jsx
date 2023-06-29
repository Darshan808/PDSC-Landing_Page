import React from "react";
import { Link } from "react-scroll";
import logo from "../../Images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <img className="n-logo" src={logo} alt="" />
        <div className="n-name">PDSC</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <Link to="Intro" smooth={true} className="n-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="About" smooth={true} className="n-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <button className="button n-button">
          <Link to="Contact" smooth={true}>
            Contact Us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
