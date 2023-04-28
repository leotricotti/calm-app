import logo from "../../assets/images/features-list/logo.png";
import { MainHeading } from "../Headings";
import Paragraph from "../Paragraph";
import styles from "./featuresList.module.css";

function FeatureListIcons({ icon, alt }) {
  return (
    <div className={styles.featuresListIconContainer}>
      <img className={styles.featuresListIcon} src={icon} alt={alt} />
    </div>
  );
}

function FeaturesList({ data }) {
  return (
    <div className={styles.featuresListContainer}>
      <FeatureListIcons icon={logo} alt={"Company logotype"} />
      <MainHeading
        style={styles.title}
        title={"From the world's #1 brand for mental fitness"}
      />
      <Paragraph
        style={styles.firstChild}
        description={
          "Calm is the leading mental health brand with the #1 App for Sleep, Meditation and Relaxation™"
        }
      />
      <div className={styles.gridContainer}>
        {data.map((d) => (
          <div className={styles.flexContainer} key={d.id}>
            <FeatureListIcons icon={d.icon} alt={"Feature icon"} />
            <Paragraph
              description={d.description}
              style={styles.restOfChilds}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesList;
