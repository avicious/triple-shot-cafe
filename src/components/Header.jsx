import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { logo, close, menu } from "../assets";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className={styles.header}>
      <img src={logo} alt="triple shots cafe" />
      <nav>
        <ul className={styles.main}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/process">Our Process</NavLink>
          </li>
          <li>
            <NavLink to="/story">Our Story</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>

        <div className={styles.mobile}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle((prev) => !prev)}
          />
          <ul className={toggle ? styles.block : styles.hidden}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/process">Our Process</NavLink>
            </li>
            <li>
              <NavLink to="/story">Our Story</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
