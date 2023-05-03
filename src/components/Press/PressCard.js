import { Link } from "react-router-dom";
import styles from "./pressCard.module.css";

function PressCard({ data }) {
  return (
    <div className={styles.pressCardContainer}>
      {data.map((data) => {
        return (
          <div key={data.id} className={styles.card}>
            <img
              src={data.image}
              alt="Press Card icon"
              className={styles.cardImg}
            />
            <h2 className={styles.cardTitle}>{data.title}</h2>
            <p className={styles.cardText}>{data.text}</p>
            <Link
              to={data.link}
              className={styles.linkContainer}
              target="_blank"
              rel="noreferrer noopener"
            >
              <p className={styles.navLink}>{data.linkText}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PressCard;
