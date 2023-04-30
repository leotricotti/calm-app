import sliderData from "../../assets/data/sliderData";
import { NavLink } from "react-router-dom";
import styles from "./pressCardSlider.module.css";
import { useState } from "react";

function Slide({ data }) {
  return (
    <div className={styles.slideContainer}>
      {data.map((data) => {
        return (
          <div className={styles.slide} key={data.id}>
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

function Dots({ handleClick }) {
  return (
    <div className={styles.dotsContainer}>
      <button
        onClick={() => handleClick(1)}
        className={`${styles.dots} ${styles.dotOne} ${styles.active}`}
      ></button>
      <button
        onClick={() => handleClick(2)}
        className={`${styles.dots} ${styles.dotTwo}`}
      ></button>
      <button
        onClick={() => handleClick(3)}
        className={`${styles.dots} ${styles.dotThree}`}
      ></button>
      <button
        onClick={() => handleClick(4)}
        className={`${styles.dots} ${styles.dotFour}`}
      ></button>
      <button
        onClick={() => handleClick(5)}
        className={`${styles.dots} ${styles.dotFive}`}
      ></button>
    </div>
  );
}

function PressCardSlider() {
  const [index, setIndex] = useState(1);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <>
      <Slide data={sliderData} index={index} />
      <Dots handleClick={handleClick} />
    </>
  );
}

export default PressCardSlider;
