import { useState, useEffect } from "react";
import sliderData from "../../assets/data/sliderData";
import { Link } from "react-router-dom";
import styles from "./pressCardSlider.module.css";

function Slide({ data, index }) {
  const [transformValue, setTransformValue] = useState(`translateX(''%)`);

  useEffect(() => {
    function handleResize() {
      const windowSize = window.innerWidth;
      if (windowSize >= 480 && windowSize < 992) {
        setTransformValue(`translateX(${-index * 200}%)`);
      } else if (windowSize >= 992) {
        setTransformValue(`translateX(${-index * 300}%)`);
      } else {
        setTransformValue(`translateX(${-index * 100}%)`);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [transformValue, index]);

  return (
    <>
      {data.map((item, i) => (
        <div
          className={styles.slide}
          key={item.id}
          style={{ transform: transformValue }}
        >
          <img src={item.image} alt="Slide item" className={styles.image} />
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.text}>{item.text}</p>
          <Link
            to={item.link}
            className={styles.linkContainer}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className={styles.navLink}>{item.linkText}</span>
          </Link>
        </div>
      ))}
    </>
  );
}

function Dots({ handleClick, index }) {
  return (
    <div className={styles.dotsContainer}>
      {[...Array(sliderData.length)].map((_, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`${styles.dots} ${index === i ? styles.active : ""}`}
        ></button>
      ))}
    </div>
  );
}

function PressCardSlider() {
  const [index, setIndex] = useState(0);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <div className={styles.pressCardSliderContainer}>
      <div className={styles.pressCardSliders}>
        <Slide data={sliderData} index={index} />
      </div>
      <Dots handleClick={handleClick} index={index} />
    </div>
  );
}

export default PressCardSlider;
