import "../Header/Header.scss";
import React, { useState } from "react";

import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsActive(!isActive);
  };

  let baseUrl: string = window.location.pathname;

  return (
    <>
      <header>
        <nav className="menu">
          <ul className={`${isActive ? "" : "active"}`}>
            <li>
              <a
                href="https://www.phillymetal.net"
                className={`${baseUrl === "/" ? "active" : ""}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://www.phillymetal.net/archive"
                className={`${baseUrl === "/archive" ? "active" : ""}`}
              >
                Archive
              </a>
            </li>
            <li>
              <a
                href="https://www.phillymetal.net/newsletter"
                className={`${baseUrl === "/newsletter" ? "active" : ""}`}
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                href="https://www.phillymetal.net/add"
                className={`${baseUrl === "/add" ? "active" : ""}`}
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
