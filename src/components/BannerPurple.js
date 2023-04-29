import { NavLink } from "react-router-dom";
import { MainHeading } from "./Headings";
import styles from "./bannerPurple.module.css";

function BannerPurple({ title, link = "/", text }) {
  return (
    <div className={styles.bannerContainer}>
      <MainHeading title={title} style={styles.title} />
      <NavLink className={styles.bannerLink} to={link}>
        {text}
      </NavLink>
    </div>
  );
}

export default BannerPurple;
