import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="header">
      <nav className="nav-container container">
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
        </ul>
      </nav>
    </header>
  );
}
