import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import styles from "./payersBanner.module.css";

function PayersBanner() {
  return (
    <div className={styles.payersBannerContainer}>
      <MainHeading title="Support the mental health of your members with Calm Health" />
      <SubHeading title="Calm Health offers evidence-based, condition-focused mental health programs that can easily integrate into existing care management or behavioral health solutions." />
    </div>
  );
}

export default PayersBanner;
