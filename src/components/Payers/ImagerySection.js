import { useEffect, useRef } from "react";
import mentalHealtChart from "../../assets/images/payers-imagery/mental-healt.png";
import clinicalPrograms from "../../assets/images/payers-imagery/clinical-programs.png";
import styles from "./imagerySection.module.css";

function BackgroundImage({ image, alt }) {
  return (
    <div className={styles.payersImageContainer}>
      <img src={image} alt={alt} className={styles.payersImage} />
    </div>
  );
}

function ImagerySection({ setElementHeight, setInitialState }) {
  const ref = useRef(null);

  useEffect(() => {
    function updateMarginTop() {
      const elementHeight = ref.current.offsetHeight;
      if (elementHeight > 500) {
        setElementHeight(elementHeight - 400);
      } else {
        setElementHeight(elementHeight - 120);
      }
    }
    updateMarginTop();

    window.addEventListener("load", updateMarginTop);
    window.addEventListener("resize", updateMarginTop);
    return () => {
      window.removeEventListener("resize", updateMarginTop);
      window.addEventListener("load", updateMarginTop);
    };
  }, [setElementHeight]);

  return (
    <div className={styles.payersImageryContainer} ref={ref}>
      <BackgroundImage image={mentalHealtChart} alt="Mental Healt Chart" />
      <BackgroundImage image={clinicalPrograms} alt="Clinical Programs" />
    </div>
  );
}

export default ImagerySection;
