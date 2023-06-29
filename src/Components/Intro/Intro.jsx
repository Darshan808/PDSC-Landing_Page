import React from "react";
import Github from "../../Images/Github.png";
import LinkedIn from "../../Images/LinkedIn.png";
import Instagram from "../../Images/Instagram.png";
import Logo from "../../Images/logo.png";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <div>
            PlAN, DESIGN,
            <br />
            SOLVE & CREATE
          </div>
          <span>
            An organization aiming to bring real-world experience to the plates
            of students;
            <br /> trying to bridge the gap between college and the market
            through the means of events such as <br /> workshops, hack-a-thons,
            and much more.
          </span>
        </div>
        <div className="i-icons">
          <a href="https://github.com/pdscorg" target="_blank">
            <img src={Github} />
          </a>
          <a href="https://www.linkedin.com/company/pdscorg/" target="_blank">
            <img src={LinkedIn} />
          </a>
          <a href="https://www.instagram.com/pdscorg/" target="_blank">
            <img src={Instagram} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img className="n-logo" src={Logo} alt="" />
        <div
          className="blur"
          style={{
            background: "rgb(238 210 255)",
            left: "52rem",
            top: "10rem",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "13rem",
            left: "-8rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
