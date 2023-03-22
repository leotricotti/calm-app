import styles from "./additionalFeature.module.css";

function MainTitle() {
  return (
    <div className={styles.mainTitleContainer}>
      <h2 className={styles.mainTitle}>
        Drive engagement with our easy-to-use platform
      </h2>
    </div>
  );
}

function Icon({ icon }) {
  return (
    <div className={styles.iconContainer}>
      <img src={icon} alt={icon} className={styles.icon} />
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
  return (
    <div className={styles.additionalFeatureContainer}>
      <MainTitle />
      <div className={styles.gridContainer}>
        {data.map((d) => {
          return (
            <div className={styles.gridItem} key={d.id}>
              <Icon icon={d.icon} />
              <Title title={d.title} />
              <Description description={d.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdditionalFeature;
