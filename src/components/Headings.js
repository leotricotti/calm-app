import styles from "./hedings.module.css";

export function SubHeading({ title, style }) {
  return (
    <div className={styles.subHeadingContainer}>
      <h3 className={`${styles.subHeading} ${style}`}>{title}</h3>
    </div>
  );
}

export function MainHeading({ title, style }) {
  return (
    <div className={styles.mainHeadingContainer}>
      <h2 className={`${styles.mainHeading} ${style}`}>{title}</h2>
    </div>
  );
}
