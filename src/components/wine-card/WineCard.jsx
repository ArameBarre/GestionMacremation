import React from "react";
import styles from "./winecard.module.css";

function WineCard({ name, description, src, alt, vignoble }) {
  return (
    <div className={styles.containerCard}>
      <img className={styles.imgCard} src={src} alt={alt} />
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.vignoble}>Vignoble: {vignoble}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>En savoir plus!</button>
      </div>
    </div>
  );
}

export default WineCard;
