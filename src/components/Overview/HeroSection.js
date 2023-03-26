import heroVideos from "../../assets/images/hero/background-video.webm";
import MainHeading from "../MainHeading";
import Paragraph from "../Paragraph";
import styles from "./heroSection.module.css";

function HeroVideo({ video, children }) {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      {children}
    </div>
  );
}

function HeroSection() {
  return (
    <>
      <div className={styles.heroSectionContainer}>
        <MainHeading
          title="Connecting the dots for care of the mind and body"
          style={styles.title}
        />
        <Paragraph
          description="Designed to support payers, plan sponsors, and providers, Calm Health offers evidence-based mental health programs and tools focused on anxiety and depression."
          container={styles.containerParagraph}
          paragraph={styles.paragraphHeroSection}
        />
      </div>
      <HeroVideo video={heroVideos} />
    </>
  );
}

export default HeroSection;
