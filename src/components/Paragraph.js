import styles from "./paragraph.module.css";

function Paragraph({ description, container, paragraph }) {
  return (
    <div className={`${styles.paragraph} ${container}`}>
      <p className={`${styles.paragraph} ${paragraph}`}>{description}</p>
    </div>
  );
}

export default Paragraph;
