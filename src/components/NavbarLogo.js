import styles from "../css/navbarLogo.module.css";

function NavbarLogo({ logo }) {
  return (
    <div className={styles.navbarLogo}>
      <img src={logo} alt="Company Logo" />
    </div>
  );
}

export default NavbarLogo;
