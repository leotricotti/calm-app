import styles from "../css/navToggle.module.css";

function NavToggle() {
  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggleLine} />
      <div className={styles.toggleLine} />
      <div className={styles.toggleLine} />
    </div>
  );
}

export default NavToggle;
