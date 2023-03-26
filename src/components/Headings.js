import styles from "./hedings.module.css";

export function MainHeading({ title, style }) {
  return (
    <div className={styles.mainHeadingContainer}>
      <h2 className={style}>{title}</h2>
    </div>
  );
}

export function SubHeading({ title, style }) {
  return (
    <div className={styles.subHeadingContainer}>
      <h3 className={style}>{title}</h3>
    </div>
  );
}
