import React from "react";
import styles from "./Header.module.css";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_flex}>
          <li>1</li>
          <li><h3>razrabotka</h3></li>
          <li>exit</li>
      </div>
    </div>
  );
};

export default Navbar;
