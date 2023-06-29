import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-form" id="Contact">
      <div className="c-left">
        <div className="awesome">
          <span>Get In Touch</span>
          <div>Contact Us</div>
        </div>
      </div>
      <div className="c-right">
        <form>
          <input name="Name" type="text" className="user" placeholder="Name" />
          <input type="email" className="user" placeholder="Email" />
          <textarea className="user" placeholder="Message" />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            right: "16rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Contact;
