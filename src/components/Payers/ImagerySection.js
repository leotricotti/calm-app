import useUpdateMarginTop from "../CustomHooks/updateMarginTop";
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

function ImagerySection() {
  const ref = useUpdateMarginTop();
  return (
    <div className={styles.payersImageryContainer} ref={ref}>
      <BackgroundImage image={mentalHealtChart} alt="Mental Healt Chart" />
      <BackgroundImage image={clinicalPrograms} alt="Clinical Programs" />
    </div>
  );
}

export default ImagerySection;
