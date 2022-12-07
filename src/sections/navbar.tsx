import "../style/navbar.scss";
import React, { useState } from "react";
import LOGO_SRC from "./../images/logo.png";

export default function Navbar() {
  const [closedburger, setclosedburger] = useState(false);
  return (
    <div className="navbar">
      <div className="container">
        <img className="Logo" src={LOGO_SRC}></img>
        <div className="links">
          <span
            onClick={() => {
              setclosedburger(closedburger == false ? true : false);
            }}
            className={closedburger == true ? "icons" + " closed" : "icons"}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
          {closedburger && (
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
