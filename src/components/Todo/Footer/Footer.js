import React from "react";

import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <p
        className={styles.paragraph}
      >{`You have ${props.items.length} tasks pending`}</p>
      <button className={styles.button} onClick={props.onClearAllTodos}>
        Clear all
      </button>
    </div>
  );
};

export default Footer;
