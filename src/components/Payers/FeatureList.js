import FeatureSubHeading from "../FeatureSubHeadings";
import FeatureParagraph from "../FeatureParagraph";
import styles from "./featureList.module.css";

function PayersFeatureList({ data }) {
  return data.map((d) => {
    return (
      <div key={d.id} className={styles.payersFeatureListContainer}>
        <FeatureSubHeading title={d.title} />
        <FeatureParagraph description={d.description} />
      </div>
    );
  });
}

export default PayersFeatureList;
