import { useState } from "react";
import sliderData from "../../assets/data/sliderData";
import { NavLink } from "react-router-dom";
import styles from "./pressCardSlider.module.css";

function Slide({ data, index }) {
  let transformValue = `translateX(${-index * 100}%)`;

  return (
    <div className={styles.slideContainer}>
      {data.map((item, i) => (
        <div
          className={styles.slide}
          key={item.id}
          style={{ transform: transformValue }}
        >
          <img src={item.image} alt="Slide item" className={styles.image} />
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.text}>{item.text}</p>
          <NavLink to={item.link} className={styles.linkContainer}>
            <span className={styles.navLink}>{item.linkText}</span>
          </NavLink>
        </div>
      ))}
    </div>
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
    <>
      <div className={styles.pressCardSliderContainer}>
        <Slide data={sliderData} index={index} />
      </div>
      <Dots handleClick={handleClick} index={index} />
    </>
  );
}

export default PressCardSlider;
