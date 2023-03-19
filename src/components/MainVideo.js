import mainImage from "../assets/images/main-video/main-video.png";
import styles from "./mainVideo.module.css";

function MainImage({ image }) {
  return (
    <img src={image} alt="Main video" className={styles.backgroundImage} />
  );
}

function YoutubeVideo() {
  return (
    <div className={styles.youtubeVideo}>
      <iframe
        width="374"
        height="215"
        src="https://www.youtube.com/embed/EFrgxYQJuw0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function Overlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.closeBtn} />
    </div>
  );
}

function MainVideo() {
  return (
    <div className={styles.mainVideo}>
      <Overlay />
      <MainImage image={mainImage} />
      <YoutubeVideo />
    </div>
  );
}

export default MainVideo;
