import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo/navbar-logo.png";
import styles from "../css/navbar.module.css";

function NavbarLogo({ logo }) {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src={logo} alt="Company Logo" />
    </div>
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

function NavItem({ url, text }) {
  return (
    <li className={styles.navItem}>
      <NavLink className={styles.navLink} to={url}>
        {text}
      </NavLink>
    </li>
  );
}

function NavMenu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <NavItem url="/" text="Overview" />
        <NavItem url="/payers" text="Employers & Payers" />
        <NavItem url="/providers" text="Providers" />
        <NavItem url="/press" text="Press" />
        <NavItem url="/inquire" text="Request Information" />
      </ul>
    </nav>
  );
}

function Navbar() {
  return (
    <header className={styles.navbarContainer}>
      <NavbarLogo logo={logo} />
      <NavToggle />
      <NavMenu />
    </header>
  );
}

export default Navbar;
