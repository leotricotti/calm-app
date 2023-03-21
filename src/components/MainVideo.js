import { useEffect, useState } from "react";
import mainImage from "../assets/images/main-video/main-video.png";
import styles from "./mainVideo.module.css";

function MainImage({ image, handleVideoPlay }) {
  return (
    <button onClick={handleVideoPlay} className={styles.playBtn}>
      <img src={image} alt="Main video" className={styles.backgroundImage} />
    </button>
  );
}

function YoutubeVideo({ overlayVisible }) {
  return (
    <div
      className={`${styles.youtubeVideo} ${
        overlayVisible ? styles.youtubeVideoVisible : ""
      }`}
    >
      <iframe
        width="374"
        height="215"
        src="https://www.youtube.com/embed/EFrgxYQJuw0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function Overlay({ overlayVisible, handleVideoStop }) {
  return (
    <div
      className={`${styles.overlay} ${
        overlayVisible ? styles.overlayVisible : ""
      }`}
    >
      <button className={styles.closeBtn} onClick={handleVideoStop} />
    </div>
  );
}

function MainVideo() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const stopVideo = () => {
    const video = document.querySelector("iframe");
    video.src = video;
  };

  useEffect(() => {
    if (overlayVisible) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [overlayVisible]);

  const handleVideoPlay = () => {
    setOverlayVisible(true);
  };

  const handleVideoStop = () => {
    setOverlayVisible(false);
    stopVideo();
  };

  return (
    <div className={styles.mainVideoContainer}>
      <Overlay
        handleVideoStop={handleVideoStop}
        overlayVisible={overlayVisible}
      />
      <MainImage image={mainImage} handleVideoPlay={handleVideoPlay} />
      <YoutubeVideo overlayVisible={overlayVisible} />
    </div>
  );
}

export default MainVideo;
