"use client";
import Image from "next/image";
import styles from "./templatePage.module.css";

export default function TemplatePage({
  titre,
  description,
  difficulte,
  prix,
  srcImg,
  altImg,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{titre}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.difficulte}>
          <p style={{ fontWeight: "bold" }}>Niveau: </p>
          <p>{difficulte}</p>
        </div>
        <div className={styles.prix}>
          <p style={{ fontWeight: "bold" }}>Prix: </p>
          <p>{prix}</p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.image} src={srcImg} alt={altImg} fill />
      </div>
    </div>
  );
}
