import { SubHeading } from "../Headings";
import Paragraph from "../Paragraph";
import styles from "./featureSection.module.css";

function FeatureImage({ img }) {
  return (
    <div className={styles.featureImageContainer}>
      <img src={img} alt="App feature images" className={styles.featureImage} />
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
        <Paragraph
          key={index}
          style={styles.paragraph}
          description={paragraph}
        />
      ))}
    </div>
  );
}

function FeatureSection({ data }) {
  return (
    <div className={styles.featureSectionContainer}>
      {data.map((d) => {
        return (
          <div className={styles.flexContainer} key={d.id}>
            <FeatureImage img={d.image} />
            <div className={styles.flexItem}>
              <SubHeading title={d.title} style={styles.title} />
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
