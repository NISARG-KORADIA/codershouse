import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

// Normal Navigation component

const Navigation = () => {
  return (
    // Here container class is defined in app.css
    <nav className={`${styles.navbar} container`}>
      <Link className={styles.brandStyle} to="/">
        <img
          className={styles.logoSizing}
          src="/images/wavingHand.png"
          alt="log"
        />
        <span className={styles.logoText}>Codershouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
