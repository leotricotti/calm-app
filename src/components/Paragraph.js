import styles from "./paragraph.module.css";

function Paragraph({ description, className }) {
  return (
    <div className={`${styles.paragraphContainer} ${className}`}>
      <p className={styles.paragraph}>{description}</p>
    </div>
  );
}

export default Paragraph;
