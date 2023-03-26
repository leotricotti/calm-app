import styles from "./paragraph.module.css";

function Paragraph({ description, style }) {
  return (
    <div className={styles.paragraphContainer}>
      <p className={style}>{description}</p>
    </div>
  );
}

export default Paragraph;
