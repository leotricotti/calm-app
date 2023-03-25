import mentalHealtChart from "../assets/images/payers-imagery/mental-healt.png";
import clinicalPrograms from "../assets/images/payers-imagery/clinical-programs.png";
import styles from "./payersImagery.module.css";

function PayersImage({ image, alt }) {
  return (
    <div className={styles.payersImageContainer}>
      <img src={image} alt={alt} className={styles.payersImage} />
    </div>
  );
}

function PayersImagery() {
  return (
    <div className={styles.payersImageryContainer}>
      <PayersImage image={mentalHealtChart} alt="Mental Healt Chart" />
      <PayersImage image={clinicalPrograms} alt="Clinical Programs" />
    </div>
  );
}

export default PayersImagery;
