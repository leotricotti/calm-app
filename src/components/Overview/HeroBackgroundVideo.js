import styles from "./heroBackgroundVideo.module.css";

function HeroBackgroundVideo({ videoSrc, children }) {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
      {children}
    </div>
  );
}

export default HeroBackgroundVideo;
