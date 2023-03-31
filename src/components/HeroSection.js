import { MainHeading } from "./Headings";
import { SubHeading } from "./Headings";
import styles from "./heroSection.module.css";

function HeroSection({ title, subtitle, background }) {
  return (
    <div
      className={styles.heroSectionContainer}
      style={{ background: { background } }}
    >
      <MainHeading title={title} style={styles.title} />
      <SubHeading title={subtitle} style={styles.subTitle} />
    </div>
  );
}

export default HeroSection;
