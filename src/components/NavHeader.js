import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo/navbar-logo.png";
import styles from "./navHeader.module.css";

function NavbarLogo({ logo }) {
  return (
    <NavLink to={"/"} className={styles.logoContainer}>
      <img className={styles.logo} src={logo} alt="Company Logo" />
    </NavLink>
  );
}

function NavToggle({ handleClick, isOpen }) {
  return (
    <button
      className={`${styles.toggleContainer} ${
        isOpen ? styles.toggleActive : ""
      }`}
      onClick={handleClick}
    >
      <div
        className={`${styles.toggleLine} ${
          isOpen ? styles.toggleLineActive : ""
        }`}
      />
      <div
        className={`${styles.toggleLine} ${
          isOpen ? styles.toggleLineActive : ""
        }`}
      />
      <div
        className={`${styles.toggleLine} ${
          isOpen ? styles.toggleLineActive : ""
        }`}
      />
    </button>
  );
}

function Navbar({ handleClick, isOpen }) {
  return (
    <div className={styles.navbarContainer}>
      <NavbarLogo logo={logo} />
      <NavToggle handleClick={handleClick} isOpen={isOpen} />
    </div>
  );
}

function NavItem({ index, url, text }) {
  if (index === 4) {
    return (
      <li className={styles.lastItem}>
        <NavLink className={styles.lastLink} to={url} key={index}>
          {text}
        </NavLink>
      </li>
    );
  } else {
    return (
      <li className={styles.navItem}>
        <NavLink className={styles.navLink} to={url} key={index}>
          {text}
        </NavLink>
      </li>
    );
  }
}

function NavMenu({ menuPosition }) {
  return (
    <nav className={`${styles.navMenuContainer} ${menuPosition}`}>
      <ul className={styles.navMenu}>
        <NavItem url="/" text="Overview" index={0} />
        <NavItem url="/payers" text="Employers & Payers" index={1} />
        <NavItem url="/providers" text="Providers" index={2} />
        <NavItem url="/press" text="Press" index={3} />
        <NavItem url="/inquire" text="Request Information" index={4} />
      </ul>
    </nav>
  );
}

function NavMenuToggle({ isOpen }) {
  return isOpen ? (
    <NavMenu menuPosition={styles.menuOpen} />
  ) : (
    <NavMenu menuPosition={styles.menuClosed} />
  );
}

function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navHeader}>
      <Navbar logo={logo} handleClick={handleClick} isOpen={isOpen} />
      <NavMenuToggle isOpen={isOpen} />
    </header>
  );
}

export default NavHeader;
