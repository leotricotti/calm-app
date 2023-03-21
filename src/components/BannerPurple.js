import { NavLink } from "react-router-dom";
import styles from "./bannerPurple.module.css";

function BannerPurple({ title, text }) {
  return (
    <div className={styles.bannerContainer}>
      <h3 className={styles.bannerTitle}>{title}</h3>
      <NavLink className={styles.bannerLink} to="/">
        {text}
      </NavLink>
    </div>
  );
}

export default BannerPurple;
