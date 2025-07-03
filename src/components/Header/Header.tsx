import "../Header/Header.scss";
import React from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu.jsx";

import logo from "../../assets/logo.png";
const Header: React.FC = () => {
  return (
    <>
      <header>
        <div className="logo-header">
          <a href="https://www.phillymetal.net">
            <img alt="phillymetal.net logo" src={logo} className="logo" />
          </a>
        </div>
      </header>
      <DropdownMenu />
    </>
  );
};

export default Header;
