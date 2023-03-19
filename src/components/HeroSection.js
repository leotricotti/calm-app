import heroVideos from "../assets/images/hero/hero-video.mp4";
import textData from "../assets/data/textData";
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
  const text = textData.map((data) => {
    return data.heroText;
  });

  const title = textData.map((data) => {
    return data.heroTitle;
  });

  return (
    <section className={styles.heroSection}>
      <Title title={title} />
      <Text text={text} />
      <HeroVideo video={heroVideos} />
    </section>
  );
}

export default HeroSection;
