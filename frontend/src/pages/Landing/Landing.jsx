import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Landing.module.css";

//if user is not logged in then this is going to be it's landing page and on the click of button he will be redirected to authentication page.

const Landing = () => {
  const history = useHistory();

  function startRegister() {
    history.push("/authenticate");
  }

  return (
    <div className="cardWrapper">
      <Card title="Welcome!" icon="/images/wavingHand.png">
        <p className={styles.text}>Invite text</p>
        <div>
          <Button onClick={startRegister} text="Let's Go" />
        </div>
        {/* <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLink} to="/authenticate">
            Sign in
          </Link>
        </div> */}
      </Card>
    </div>
  );
};

export default Landing;
