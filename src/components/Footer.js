import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";

function FooterTitle({ title, children }) {
  return (
    <div className={styles.titleContainer}>
      <h4 className={styles.title}>{title}</h4>
      {children}
    </div>
  );
}

function FooterItem({ url, item, targetBlank }) {
  return (
    <div className={styles.itemContainer}>
      <NavLink
        className={styles.item}
        to={url}
        target={`${targetBlank ? "_blank" : ""}`}
      >
        {item}
      </NavLink>
    </div>
  );
}

function FooterCopyright() {
  return (
    <div className={styles.copyrightContainer}>
      <span className={styles.copyright}>
        Copyright @ 2023 Calm. All rights reserved.
      </span>
    </div>
  );
}

function Footer({ data }) {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerNav}>
        <FooterTitle title="Company">
          <FooterItem url="/" item="Overview" targetBlank={false} />
          <FooterItem
            url="/payers"
            item="Employers & Payers"
            targetBlank={false}
          />
          <FooterItem url="/providers" item="Providers" targetBlank={false} />
          <FooterItem url="/press" item="Press" targetBlank={false} />
        </FooterTitle>
        <FooterTitle title="Solutions">
          <FooterItem
            url="https://www.calm.com/es"
            item="Calm"
            targetBlank={true}
          />
          <FooterItem
            url="https://business.calm.com/"
            item="Calm for Bussines"
            targetBlank={true}
          />
          <FooterItem url="/" item="Calm Healt" targetBlank={true} />
        </FooterTitle>
        <FooterTitle title="More Information">
          <FooterItem
            url="/learn-more"
            item="Request Information"
            targetBlank={true}
          />
          <FooterItem
            url="https://rb.gy/nkxrpi"
            item="Request Information"
            targetBlank={true}
          />
          <FooterItem
            url="https://www.linkedin.com/company/calmhealth/"
            item="Linkedln"
            targetBlank={true}
          />
        </FooterTitle>
      </div>
      <FooterCopyright />
    </div>
  );
}

export default Footer;
