import { Fragment } from "react";
import { SubHeading } from "../Headings";
import Paragraph from "../Paragraph";
import styles from "./featureSection.module.css";

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

function FeatureComponent({ data }) {
  return (
    <div className={styles.featureSectionContainer}>
      {data.map((d) => {
        return (
          <Fragment className={styles.flexContainer} key={d.id}>
            <div className={styles.flexItem}>
              <SubHeading title={d.title} style={styles.title} />
              <FeatureDescription
                description={d.description}
                splitWord={"*"}
                index={d.id}
              />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default FeatureComponent;
