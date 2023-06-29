import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <span>pdsc@pcampus.edu.np</span>
        <div className="f-icons">
          <a
            class="fa-brands fa-instagram fa-xl"
            style={{ color: "#ffffff" }}
            href="https://www.instagram.com/pdscorg/"
            target="_blank"
          />
          <a
            class="fa-brands fa-facebook fa-xl"
            style={{ color: "#ffffff" }}
            href="https://www.facebook.com/pdscorg"
            target="_blank"
          />
          <a
            class="fa-brands fa-github fa-xl"
            style={{ color: "#ffffff" }}
            href="https://github.com/pdscorg"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
