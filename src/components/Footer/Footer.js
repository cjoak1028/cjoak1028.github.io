import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.footer} padding-x`}>
      <p>DESIGNED & BUILT BY DAVID KIM</p>
      <p className={styles.copyright}>DK PORTFOLIO &#169; 2023</p>
    </div>
  );
};

export default Footer;
