import styles from "./mainHeding.module.css";

function MainHeading({ title, className }) {
  return (
    <div className={`${styles.mainnHeadingContainer} ${className}`}>
      <h2 className={`${styles.mainHeading} ${className}`}>{title}</h2>
    </div>
  );
}

export default MainHeading;
