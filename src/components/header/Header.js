import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <>
      <div className={classes.header}>
        <img src={logo} alt="logo" />
        <hr />
        <nav>
          <ul>
            <li>
              <i className="fi fi-sr-apps-add"></i>Dashboard
            </li>
            <li>
              <i className="fi fi-ss-gamepad"></i>Trainings
            </li>
            <li>
              <i className="fi fi-sr-square-star"></i>Users
            </li>
            <li>
              <i className="fi fi-ss-marker"></i>Analytics
            </li>
            <li>
              <i className="fi fi-ss-marker"></i>My Account
            </li>
            <li>
              <i className="fi fi-ss-marker"></i>Support
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
