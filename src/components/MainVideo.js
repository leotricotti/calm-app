import { useEffect, useState } from "react";
import mainImageSmall from "../assets/images/main-video/main-image-small.png";
import mainImageBig from "../assets/images/main-video/main-image-big.png";
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
        src="https://www.youtube.com/embed/EFrgxYQJuw0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function Overlay({ overlayVisible, children }) {
  return (
    <div
      className={`${styles.overlay} ${
        overlayVisible ? styles.overlayVisible : ""
      }`}
    >
      {children}
    </div>
  );
}

function CloseButton({ handleVideoStop }) {
  return <button className={styles.closeBtn} onClick={handleVideoStop} />;
}

function MainVideo() {
  const [backgroundImage, setBacgroundImage] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const stopVideo = () => {
    const video = document.querySelector("iframe");
    video.src = "https://www.youtube.com/embed/EFrgxYQJuw0";
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 767) {
        setBacgroundImage(true);
      } else {
        setBacgroundImage(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      >
        <CloseButton handleVideoStop={handleVideoStop} />
        <YoutubeVideo overlayVisible={overlayVisible} />
      </Overlay>
      <MainImage
        image={`${backgroundImage ? mainImageBig : mainImageSmall}`}
        handleVideoPlay={handleVideoPlay}
      />
    </div>
  );
}

export default MainVideo;
