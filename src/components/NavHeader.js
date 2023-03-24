import { useState, useEffect } from "react";
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
    <div className={styles.navbar}>
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
        <NavLink
          className={styles.navLink}
          to={url}
          key={index}
          style={({ isActive }) => {
            return {
              color: isActive ? "var(--clr-accent)" : "var(--clr-dark)",
              fontWeight: isActive ? "400" : "300",
            };
          }}
        >
          <span className={styles.linkHover}>{text}</span>
        </NavLink>
      </li>
    );
  }
}

function NavMenu({ menuPosition }) {
  return (
    <div className={styles.navMenuContainer}>
      <ul className={`${styles.navMenu} ${menuPosition}`}>
        <NavItem url="/" text="Overview" index={0} />
        <NavItem url="/payers" text="Employers & Payers" index={1} />
        <NavItem url="/providers" text="Providers" index={2} />
        <NavItem url="/press" text="Press" index={3} />
        <NavItem url="/inquire" text="Request Information" index={4} />
      </ul>
    </div>
  );
}

function NavMenuToggle({ isOpen, isLoaded }) {
  if (!isLoaded) {
    return null;
  } else {
    return isOpen ? (
      <NavMenu menuPosition={styles.menuOpen} isOpen={isOpen} />
    ) : (
      <NavMenu menuPosition={styles.menuClosed} isOpen={isOpen} />
    );
  }
}

function NavHeader() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 992) {
        setIsOpen(false);
        setIsLoaded(false);
      } else {
        setIsLoaded(true);
        setIsOpen(true);
      }
    }

    window.addEventListener("resize", handleResize());
    return () => window.removeEventListener("resize", handleResize());
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsLoaded(true);
  };

  return (
    <div className={styles.navHeaderContainer}>
      <Navbar logo={logo} handleClick={handleClick} isOpen={isOpen} />
      <NavMenuToggle isOpen={isOpen} isLoaded={isLoaded} />
    </div>
  );
}

export default NavHeader;
