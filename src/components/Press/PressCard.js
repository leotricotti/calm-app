import { NavLink } from "react-router-dom";
import styles from "./pressCard.module.css";

function PressCard({ data }) {
  return data.map((data) => {
    return (
      <div key={data.id} className={styles.pressCardContainer}>
        <img
          src={data.image}
          alt="Press Card icon"
          className={styles.cardImg}
        />
        <h2 className={styles.cardTitle}>{data.title}</h2>
        <p className={styles.cardText}>{data.text}</p>
        <NavLink to={data.link} className={styles.linkContainer}>
          <p className={styles.navLink}>{data.linkText}</p>
        </NavLink>
      </div>
    );
  });
}

export default PressCard;