import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const brandStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "13px",
  };

  const logoSizing = {
    height: "27px",
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        <img style={logoSizing} src="/images/wavingHand.png" alt="log" />
        <span style={logoText}>Codershouse</span>
      </Link>
    </nav>
  );
};

export default Navigation;
