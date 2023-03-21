import heroVideos from "../assets/images/hero/hero-video.mp4";
import styles from "./heroSection.module.css";

function Title({ index, title }) {
  return (
    <div className={styles.titleContainer}>
      <h1 key={index} className={styles.title}>
        {title}
      </h1>
    </div>
  );
}

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
      <Title title={"Connecting the dots for care of the mind and body"} />
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
