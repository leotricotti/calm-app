import { MainHeading } from "../Headings";
import { SubHeading } from "../Headings";
import styles from "./payersHeroSection.module.css";

function PayersHeroSection({ style, title, subtitle }) {
  return (
    <div className={styles.heroSectionContainer} style={style}>
      <MainHeading title={title} style={styles.title} />
      <SubHeading title={subtitle} style={styles.subTitle} />
    </div>
  );
}

export default PayersHeroSection;
