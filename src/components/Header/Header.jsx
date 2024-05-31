import logo from "../../assets/logo.png";
import "../Header/Header.scss";
import React, { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  let location = window.location.pathname;

  return (
    <>
      <header>
        <nav className="menu">
          <ul className={`${isActive ? "" : "active"}`}>
            <li>
              <a
                href="https://www.phillymetal.net"
                className={`${location === "/" ? "active" : ""}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://www.phillymetal.net/archive"
                className={`${location === "/archive" ? "active" : ""}`}
              >
                Archive
              </a>
            </li>
            <li>
              <a
                href="https://www.phillymetal.net/newsletter"
                className={`${location === "/newsletter" ? "active" : ""}`}
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                href="https://www.phillymetal.net/add"
                className={`${location === "/add" ? "active" : ""}`}
              >
                Add Something
              </a>
            </li>
          </ul>
          <a
            className={`toggle-nav${isActive ? "active" : ""}`}
            href="#"
            onClick={handleClick}
          ></a>
        </nav>
        <div className="logo-header">
          <a href="https://www.phillymetal.net">
            <img alt="phillymetal.net logo" src={logo} className="logo" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
