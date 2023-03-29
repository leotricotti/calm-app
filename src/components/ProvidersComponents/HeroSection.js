import { MainHeading } from "../Headings";
import { Paragraph } from "../Paragraph";
import styles from "./heroSection.module.css";

function HeroSection() {
  return (
    <>
      <div className={styles.heroSectionContainer}>
        <MainHeading
          title="Evidence-based solution that helps providers spend time with those who need it most"
          style={styles.title}
        />
        <Paragraph
          description="Calm Health offers evidence-based, condition-focused mental health programs that are aligned with providers’ advice and workflows."
          style={styles.paragraph}
        />
      </div>
    </>
  );
}

export default HeroSection;
