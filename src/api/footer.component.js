import React from "react";
import "./footer.style.css";

const Footer = () => {
  return (
    <div>
      <footer className="container">
        <hr />
        <ul className="copyright">
          <li>© Copyright 2020 Abhijeet Karmaker</li>
          <li>
            Design by{" "}
            <a title="AbhijeetKarmaker" href="https://github.com/abhikarmaker" target="_blank" rel="noreferrer">              Abhijeet Karmaker
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
