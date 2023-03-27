import { Fragment } from "react";
import { SubHeading } from "../Headings";
import Paragraph from "../Paragraph";
import styles from "./payersFeatureList.module.css";

function PayersFeatureList({ data }) {
  return (
    <div className={styles.featureListContainer}>
      {data.map((d) => {
        return (
          <Fragment key={d.id}>
            <SubHeading title={d.title} style={styles.subTitle} />
            <Paragraph description={d.description} style={styles.paragraph} />
          </Fragment>
        );
      })}
    </div>
  );
}

export default PayersFeatureList;
