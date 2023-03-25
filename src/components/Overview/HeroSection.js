import heroVideos from "../../assets/images/hero/background-video.webm";
import MainHeading from "../MainHeading";
import styles from "./heroSection.module.css";

function Text({ index, text }) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.text} key={index}>
        {text}
      </p>
    </div>
  );
}

function HeroVideo({ video }) {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

function HeroSection() {
  return (
    <div className={styles.heroSectionContainer}>
      <MainHeading
        title={"Connecting the dots for care of the mind and body"}
        className={""}
      />
      <Text
        text={
          "Designed to support payers, plan sponsors, and providers, Calm Health offers evidence-based mental health programs and tools focused on anxiety and depression."
        }
      />
      <HeroVideo video={heroVideos} />
    </div>
  );
}

export default HeroSection;
