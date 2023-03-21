import styles from "./additionalFeature.module.css";

function MainTitle() {
  return (
    <div className={styles.mainTitleContainer}>
      <h3 className={styles.mainTitle}>
        Drive engagement with our easy-to-use platform
      </h3>
    </div>
  );
}

function Icon({ icon }) {
  return (
    <div className={styles.iconContainer}>
      <img src={icon} alt={icon} />
    </div>
  );
}

function Title({ title }) {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

function Description({ description }) {
  return (
    <div className={styles.descriptionContainer}>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

function AdditionalFeature({ data }) {
  return data.map((d) => {
    return (
      <div className={styles.additionalFeatureContainer}>
        <MainTitle />
        <Icon icon={d.icon} />
        <Title title={d.title} />
        <Description description={d.description} />
      </div>
    );
  });
}
