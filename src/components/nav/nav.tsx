import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./nav.css";

export default function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="header">
      <nav className="nav-container container">
        <NavLink to="/memeboi" className="nav-logo">
          <img src={logo} />
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <NavLink
              to="/starboi"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              StarBoi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/countyboi"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              CountyBoi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/yeeenaaa"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              YeeeNaaa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addThings"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              AddThings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toplevelboi"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              TopLevelBoi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/conditional"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Conditional
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/windowboi"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              WindowBoi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/formyboi"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              FormyBoi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/formyrework"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              FormyRework
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/anotherformyboi"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              AnotherFormyBoi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/userefprac"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              UseRef
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
