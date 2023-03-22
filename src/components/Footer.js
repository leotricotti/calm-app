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

function FooterItem({ url, item }) {
  return (
    <div className={styles.itemContainer}>
      <NavLink className={styles.item} to={url} target={"_blank"}>
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
          <FooterItem url="/" item="Overview" />
          <FooterItem url="/payers" item="Employers & Payers" />
          <FooterItem url="/providers" item="Providers" />
          <FooterItem url="/press" item="Press" />
        </FooterTitle>
        <FooterTitle title="Solutions">
          <FooterItem url="https://www.calm.com/es" item="Calm" />
          <FooterItem
            url="https://business.calm.com/"
            item="Calm for Bussines"
          />
          <FooterItem url="/" item="Calm Healt" />
        </FooterTitle>
        <FooterTitle title="More Information">
          <FooterItem url="/learn-more" item="Request Information" />
          <FooterItem url="https://rb.gy/nkxrpi" item="Request Information" />
          <FooterItem
            url="https://www.linkedin.com/company/calmhealth/"
            item="Linkedln"
          />
        </FooterTitle>
      </div>
      <FooterCopyright />
    </div>
  );
}

export default Footer;
