import styles from "./mainHeding.module.css";

function MainHeading({ title, style }) {
  return (
    <div className={styles.mainHeadingContainer}>
      <h2 className={`${styles.mainHeading} ${style}`}>{title}</h2>
    </div>
  );
}

export default MainHeading;
