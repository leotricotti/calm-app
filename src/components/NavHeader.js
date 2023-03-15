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

function NavToggle() {
  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleLine} />
      <div className={styles.toggleLine} />
      <div className={styles.toggleLine} />
    </div>
  );
}

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <NavbarLogo logo={logo} />
      <NavToggle />
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

function NavMenu() {
  return (
    <nav className={styles.navMenuContainer}>
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

function NavHeader() {
  return (
    <header className={styles.navHeader}>
      <Navbar logo={logo} />
      <NavMenu />
    </header>
  );
}

export default NavHeader;
