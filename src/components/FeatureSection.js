import styles from "./featureLeft.module.css";

function FeatureImage({ img }) {
  return (
    <div className={styles.featureImageContainer}>
      <img src={img} alt="App feature images" className={styles.featureImage} />
    </div>
  );
}

function FeatureTitle({ title }) {
  return (
    <div className={styles.featureTitleContainer}>
      <h3 className={styles.featureTitle}>{title}</h3>
    </div>
  );
}

function FeatureDescription({ description }) {
  return (
    <div className={styles.featureDescriptionContainer}>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function FeatureSection({ img, title, description }) {
  return (
    <div className={styles.featureSectionContainer}>
      <FeatureImage img={img} />
      <FeatureTitle title={title} />
      <FeatureDescription description={description} />
    </div>
  );
}

export default FeatureSection;
