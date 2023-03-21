import { Fragment } from "react";
import logo from "../assets/images/features-list/logo.png";
import styles from "./featuresList.module.css";

function FeaturesLogo({ logo }) {
  return (
    <div className={styles.featuresLogoContainer}>
      <img className={styles.featuresLogo} src={logo} alt="Brand logotype" />
    </div>
  );
}

function MainTitle({ mainTitle }) {
  return (
    <div className={styles.mainTitleContainer}>
      <h2 className={styles.mainTitle}>{mainTitle}</h2>
    </div>
  );
}

function MainDescription({ mainDescription }) {
  return (
    <div className={styles.mainDescriptionContainer}>
      <p className={styles.mainDescription}>{mainDescription}</p>
    </div>
  );
}

function FeatureIcon({ featureIcon }) {
  return (
    <div className={styles.featureIconContainer}>
      <img
        className={styles.featureIcon}
        src={featureIcon}
        alt="Feature icon"
      />
    </div>
  );
}

function FeatureDescription({ featureDescription }) {
  return (
    <div className={styles.featureDescriptionContainer}>
      <p className={styles.featureDescription}>{featureDescription}</p>
    </div>
  );
}

function FeaturesList({ data }) {
  return (
    <div className={styles.featuresListContainer}>
      <FeaturesLogo logo={logo} />
      <MainTitle
        mainTitle={"From the world&#39s #1 brand for mental fitness"}
      />
      <MainDescription
        mainDescription={
          "Calm is the leading mental health brand with the #1 App for Sleep, Meditation and Relaxation™"
        }
      />

      {data.map((d) => (
        <Fragment key={d.id}>
          <FeatureIcon featureIcon={d.featureIcon} />
          <FeatureDescription featureDescription={d.featureDescription} />
        </Fragment>
      ))}
    </div>
  );
}

export default FeaturesList;
