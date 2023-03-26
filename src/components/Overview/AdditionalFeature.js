import { MainHeading } from "../Headings";
import Paragraph from "../Paragraph";
import styles from "./additionalFeature.module.css";

function Icon({ icon }) {
  return (
    <div className={styles.iconContainer}>
      <img src={icon} alt={icon} className={styles.icon} />
    </div>
  );
}

function AdditionalFeature({ data }) {
  return (
    <div className={styles.additionalFeatureContainer}>
      <MainHeading
        title="Drive engagement with our easy-to-use platform"
        style={styles.title}
      />
      <div className={styles.gridContainer}>
        {data.map((d) => {
          return (
            <div className={styles.gridItem} key={d.id}>
              <Icon icon={d.icon} />
              <MainHeading title={d.title} className={styles.heading} />
              <Paragraph style={styles.paragraph} description={d.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdditionalFeature;
