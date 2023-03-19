import logo from "../../assets/logo.png";
import "../Header/Header.scss";
import React, { useState } from "react";

function toggleMenu() {
  const burger = document.querySelector(".toggle-nav");
  const menu = document.querySelector(".menu ul");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header>
        <nav className="menu">
          <ul className={`${isActive ? "" : "active"}`}>
            <li>
              <a href="https://www.phillymetal.net" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="https://www.phillymetal.net/archive">Archive</a>
            </li>
            <li>
              <a href="https://www.phillymetal.net/newsletter">Newsletter</a>
            </li>
            <li>
              <a href="https://www.phillymetal.net/add">Add Something</a>
            </li>
          </ul>
          <a
            className={`toggle-nav${isActive ? "active" : ""}`}
            href="#"
            onClick={handleClick}
          >
            &#9776;
          </a>
        </nav>

        <div className="logo-header">
          <a href="https://www.phillymetal.net">
            <img alt="phillymetal.net logo" src={logo} className="logo" />
          </a>
        </div>
        <script>toggleMenu();</script>
      </header>
    </>
  );
};

export default Header;
