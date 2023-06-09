import { SubHeading } from "../Headings";
import Paragraph from "../Paragraph";
import styles from "./providersFeatureList.module.css";

function PayersFeatureList({ data }) {
  return (
    <div className={styles.featureListContainer}>
      {data.map((d) => {
        return (
          <div key={d.id}>
            <SubHeading title={d.title} style={styles.subTitle} />
            <Paragraph description={d.description} style={styles.paragraph} />
          </div>
        );
      })}
    </div>
  );
}

export default PayersFeatureList;
