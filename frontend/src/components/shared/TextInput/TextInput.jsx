import React from "react";
import styles from "./TextInput.module.css";

// Styled textinput

const TextInput = (props) => {
  return (
    <div>
      <input className={styles.input} type="text" {...props}></input>
    </div>
  );
};

export default TextInput;
