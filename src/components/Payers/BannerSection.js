import { MainHeading } from "../Headings";
import { SubHeading } from "../Headings";
import styles from "./bannerSection.module.css";

function BannerSection() {
  return (
    <div className={styles.bannerSectionContainer}>
      <MainHeading
        title="Support the mental health of your members with Calm Health"
        style={styles.title}
      />
      <SubHeading
        title="Calm Health offers evidence-based, condition-focused mental health programs that can easily integrate into existing care management or behavioral health solutions."
        style={styles.subTitle}
      />
    </div>
  );
}

export default BannerSection;
