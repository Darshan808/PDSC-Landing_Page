import React from "react";
import "./About.css";
import Banner from "../../Images/banner.jpg";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="a-left">
        <div className="a-title">
          <div>About Us</div>
          <span>
            We are a{" "}
            <span style={{ color: "#44aa70", fontWeight: "bold" }}>
              Non Profit Organization
            </span>
            <br />
            <br />
            Technical skills being crucial in this era, we are focused on
            providing quality IT workshops <br /> for all students across the
            country and the globe.
            <br />
            <br />
            We believe workshops, bootcamps, not only improves skills <br /> but
            also develops strength on students to believe in change and team
            works.
            <br />
            With the aim of making industrial based education accessible to
            everyone,
            <br />
            <br /> we are fully dedicated on organizing workshops, events,
            bringing on real projects.
            <br /> This makes PDSC a quality learning platform for everyone
            everywhere.
          </span>
          <div
            className="blur"
            style={{
              background: "rgb(238 210 255)",
              left: "-12rem",
              top: "5rem",
            }}
          ></div>
        </div>
        <div className="a-right">
          <img src={Banner} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default About;
