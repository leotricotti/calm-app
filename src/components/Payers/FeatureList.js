import SubHeading from "../SubHeading";
import Paragraph from "../Paragraph";
import styles from "./featureList.module.css";

function PayersFeatureList({ data }) {
  return data.map((d) => {
    return (
      <div key={d.id} className={styles.payersFeatureListContainer}>
        <SubHeading title={d.title} />
        <Paragraph description={d.description} />
      </div>
    );
  });
}

export default PayersFeatureList;
