import React from "react";
import logo from "../images/Logo.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-logo">
        <img alt="company logo" src={logo}></img>
      </div>
      <div className="nav-div">
        <ul className="nav-list">
          <li className="nav-items">ABOUT US</li>
          <li className="nav-items">HEALTH COACH</li>
          <li className="nav-items">COURSES</li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
