import styles from "./featureSection.module.css";

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

function FeatureDescription({ description, splitWord }) {
  let paragraphs = [description];
  if (description.includes(splitWord)) {
    paragraphs = description.split(splitWord);
  }
  return (
    <div className={styles.featureDescriptionContainer}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={styles.featureDescription}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function FeatureSection({ data }) {
  return (
    <div className={styles.featureSectionContainer}>
      {data.map((d) => {
        return (
          <div className={styles.gridContainer} key={d.id}>
            <FeatureImage img={d.image} />
            <div className={styles.gridItem}>
              <FeatureTitle title={d.title} />
              <FeatureDescription
                description={d.description}
                splitWord={"*"}
                index={d.id}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeatureSection;
