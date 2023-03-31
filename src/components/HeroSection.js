import { MainHeading } from "./Headings";
import { SubHeading } from "./Headings";
import styles from "./heroSection.module.css";

function HeroSection({ background, title, subtitle }) {
  return (
    <div className={styles.heroSectionContainer} style={background}>
      <MainHeading title={title} style={styles.title} />
      <SubHeading title={subtitle} style={styles.subTitle} />
    </div>
  );
}

export default HeroSection;
