import { NavLink } from "react-router-dom";
import pressCardData from "../../assets/data/pressCardsData";
import styles from "./pressCard.module.css";

function PressCard() {
  return pressCardData.map((data) => {
    return (
      <div key={data.id} className={styles.pressCardContainer}>
        <img
          src={data.image}
          alt="Press Card icon"
          className={styles.cardImg}
        />
        <h2 className={styles.cardTitle}>{data.title}</h2>
        <p className={styles.cardText}>{data.text}</p>
        <NavLink to={data.link}>
          <p style={styles.navLink}>{data.videoText}</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.72 15L16.3472 10.357C16.7732 9.92932 16.7732 9.23603 16.3472 8.80962L11.72 4.16667L10.1776 5.71508L12.9425 8.4889H4.16669V10.6774H12.9425L10.1776 13.4522L11.72 15Z"
              fill="currentColor"
            ></path>
          </svg>
        </NavLink>
      </div>
    );
  });
}

export default PressCard;
