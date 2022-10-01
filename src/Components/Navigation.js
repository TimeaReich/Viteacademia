import React from "react";
import logo from "../images/Logo.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
        <img alt="company logo" src={logo}></img>
      </div>
      <ul>
        <li>ABOUT US</li>
        <li>HEALTH COACH</li>
        <li>COURSES</li>
      </ul>
    </div>
  );
};
export default Navigation;
