import React from "react";

import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <div>
      <h1 className={styles.heading}>Todo Application</h1>
      <hr className={styles.hr}></hr>
    </div>
  );
};

export default Heading;
