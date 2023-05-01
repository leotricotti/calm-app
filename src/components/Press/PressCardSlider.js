import { useState } from "react";
import sliderData from "../../assets/data/sliderData";
import { NavLink } from "react-router-dom";
import styles from "./pressCardSlider.module.css";

function Slide({ index, data }) {
  return (
    <div className={styles.slideContainer}>
      {data.map((data) => {
        return (
          <div
            className={styles.slide}
            key={data.id}
            style={{
              transform: `translateX(${
                index === 0
                  ? "0"
                  : index === 1
                  ? "-100%"
                  : index === 2
                  ? "-200%"
                  : index === 3
                  ? "-300%"
                  : index === 4
                  ? "-400%"
                  : "0"
              })`,
            }}
          >
            <img src={data.image} alt="Slide item" className={styles.image} />
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.text}>{data.text}</p>
            <NavLink to={data.link} className={styles.linkContainer}>
              <span className={styles.navLink}>{data.linkText}</span>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

function Dots({ handleClick, index }) {
  return (
    <div className={styles.dotsContainer}>
      <button
        onClick={() => handleClick(0)}
        className={`${styles.dots} ${index === 0 ? styles.active : ""}`}
      ></button>
      <button
        onClick={() => handleClick(1)}
        className={`${styles.dots} ${index === 1 ? styles.active : ""}`}
      ></button>
      <button
        onClick={() => handleClick(2)}
        className={`${styles.dots} ${styles.dotThree} ${
          index === 2 ? styles.active : ""
        }`}
      ></button>
      <button
        onClick={() => handleClick(3)}
        className={`${styles.dots} ${styles.dotFour} ${
          index === 3 ? styles.active : ""
        }`}
      ></button>
      <button
        onClick={() => handleClick(4)}
        className={`${styles.dots} ${styles.dotFive} ${
          index === 4 ? styles.active : ""
        }`}
      ></button>
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
      <Slide data={sliderData} index={index} />
      <Dots handleClick={handleClick} index={index} />
    </>
  );
}

export default PressCardSlider;
