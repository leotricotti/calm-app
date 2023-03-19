import { useState } from "react";
import mainImage from "../assets/images/main-video/main-video.png";
import styles from "./mainVideo.module.css";

function MainImage({ image, toggleOverlay }) {
  return (
    <button onClick={toggleOverlay}>
      <img src={image} alt="Main video" className={styles.backgroundImage} />
    </button>
  );
}

function YoutubeVideo({ overlaVisible }) {
  return (
    <div
      className={`${styles.youtubeVideo} ${
        overlaVisible ? styles.youtubeVideoVisible : ""
      }`}
    >
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

function Overlay({ overlaVisible, toggleOverlay }) {
  console.log(overlaVisible);
  return (
    <div
      className={`${styles.overlay} ${
        overlaVisible ? styles.overlayVisible : ""
      }`}
    >
      <button className={styles.closeBtn} onClick={toggleOverlay} />
    </div>
  );
}

function MainVideo() {
  const [overlaVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlaVisible);
  };

  return (
    <section className={styles.mainVideo}>
      <Overlay toggleOverlay={toggleOverlay} overlaVisible={overlaVisible} />
      <MainImage image={mainImage} toggleOverlay={toggleOverlay} />
      <YoutubeVideo overlaVisible={overlaVisible} />
    </section>
  );
}

export default MainVideo;
