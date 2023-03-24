import styles from "./payersBanner.module.css";

function Header({ title }) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

function SubHeader({ description }) {
  return (
    <div className={styles.subheaderContainer}>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

function PayersBanner() {
  return (
    <div className={styles.payersBannerContainer}>
      <Header title="Support the mental health of your members with Calm Health" />
      <SubHeader description="Calm Health offers evidence-based, condition-focused mental health programs that can easily integrate into existing care management or behavioral health solutions." />
    </div>
  );
}

export default PayersBanner;
