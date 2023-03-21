import { Fragment } from "react";
import logo from "../assets/images/features-list/logo.png";
import styles from "./featuresList.module.css";

function FeatureListIcons({ icon, alt }) {
  return (
    <div className={styles.featuresListIconContainer}>
      <img className={styles.featuresListIcon} src={icon} alt={alt} />
    </div>
  );
}

function MainTitle({ title }) {
  return (
    <div className={styles.mainTitleContainer}>
      <h2 className={styles.mainTitle}>{title}</h2>
    </div>
  );
}

function FeatureListDescription({ description }) {
  return (
    <div className={styles.mainDescriptionContainer}>
      <p className={styles.mainDescription}>{description}</p>
    </div>
  );
}

function FeaturesList({ data }) {
  return (
    <div className={styles.featuresListContainer}>
      <FeatureListIcons icon={logo} alt={"Company logotype"} />
      <MainTitle mainTitle={"From the world's #1 brand for mental fitness"} />
      <FeatureListDescription
        description={
          "Calm is the leading mental health brand with the #1 App for Sleep, Meditation and Relaxation™"
        }
      />

      {data.map((d) => (
        <Fragment key={d.id}>
          <FeatureListIcons icon={d.icon} alt={"Feature icon"} />
          <FeatureListDescription description={d.description} />
        </Fragment>
      ))}
    </div>
  );
}

export default FeaturesList;
