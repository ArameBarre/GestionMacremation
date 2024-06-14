import React from "react";
import styles from "./steps.module.css";

function Steps({ icon, num, alt, img, text }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={img} alt={alt} />
      <img className={styles.icon} src={icon} alt={num} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default Steps;
