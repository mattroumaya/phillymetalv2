import logo from "../../assets/logo.png";
import "../Header/Header.scss";

const Header = () => {
  return (
    <>
      <header>
        <nav className="menu">
          <ul className="active">
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
          <a className="toggle-nav" href="#">
            &#9776;
          </a>
        </nav>

        <center>
          <div className="logo-header">
            <a href="https://www.phillymetal.net">
              <img alt="phillymetal.net logo" src={logo} className="logo" />
            </a>
          </div>
        </center>
      </header>
    </>
  );
};

export default Header;
