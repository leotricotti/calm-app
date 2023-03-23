import logo from "../assets/images/features-list/logo.png";
import styles from "./featuresList.module.css";

function MainTitle({ title }) {
  return (
    <div className={styles.mainTitleContainer}>
      <h2 className={styles.mainTitle}>{title}</h2>
    </div>
  );
}

function FeatureListDescription({ description, style }) {
  return (
    <div className={styles.descriptionContainer}>
      <p className={style}>{description}</p>
    </div>
  );
}

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
      <MainTitle title={"From the world's #1 brand for mental fitness"} />
      <FeatureListDescription
        style={styles.firstChild}
        description={
          "Calm is the leading mental health brand with the #1 App for Sleep, Meditation and Relaxation™"
        }
      />
      {data.map((d) => (
        <div className={styles.flexContainer} key={d.id}>
          <FeatureListIcons icon={d.icon} alt={"Feature icon"} />
          <FeatureListDescription
            description={d.description}
            style={styles.restOfChilds}
          />
        </div>
      ))}
    </div>
  );
}

export default FeaturesList;
