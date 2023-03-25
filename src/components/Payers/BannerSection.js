import FeatureMainHeading from "../FeatureMainHeading";
import FeatureSubHeading from "../FeatureSubHeadings";
import styles from "./bannerSection.module.css";

function BannerSection() {
  return (
    <div className={styles.bannerSectionContainer}>
      <FeatureMainHeading title="Support the mental health of your members with Calm Health" />
      <FeatureSubHeading title="Calm Health offers evidence-based, condition-focused mental health programs that can easily integrate into existing care management or behavioral health solutions." />
    </div>
  );
}

export default BannerSection;
