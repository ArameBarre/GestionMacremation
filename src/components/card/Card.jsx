"use client";
import React from "react";
import styles from "./card.module.css";
import { useRouter } from "next/navigation";

export const Card = ({ titre, description, srcImg, altText, id }) => {
  const router = useRouter();

  const handlerclick = () => {
    router.push(`/motifs/${id}`);
  };
  return (
    <div className={styles.containerCard}>
      <img className={styles.imgContainer} src={srcImg} alt={altText} />
      <h1 className={styles.title}>{titre}</h1>
      <p className={styles.description}>{description}</p>
      <button className={styles.button} onClick={handlerclick}>
        En savoir plus!
      </button>
    </div>
  );
};
