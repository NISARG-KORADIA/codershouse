import React from "react";
// import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ title, icon, children }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.headingWrapper}>
          <img className={styles.headingImage} src={icon} alt="logo" />
          <h1 className={styles.heading}>{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
