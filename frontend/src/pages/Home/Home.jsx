import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const signInLink = {
    color: "#1683ff",
    fontWeight: 600,
    textDecoration: "none",
    marginLeft: "4px",
  };

  const history = useHistory();
  
  function startRegister() {
    history.push('/register');
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="/images/wavingHand.png">
        <p className={styles.text}>
          We're working hard to get Codershouse ready for everyone! While we
          wrap up the finishing touches, we're adding people gradully to make
          sure nothing breaks.
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLink} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
