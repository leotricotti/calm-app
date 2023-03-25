import styles from "./mainHeding.module.css";

function MainHeading({ title, className, heading }) {
  return (
    <div className={styles.mainHeadingContainer}>
      <heading className={`${styles.mainHeading} ${className}`}>
        {title}
      </heading>
    </div>
  );
}

export default MainHeading;
