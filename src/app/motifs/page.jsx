import React from "react";
import styles from "./motifs.module.css";
import { Card } from "@/components/card/Card";

export const metadata = {
  title: "Motifs", //absolute will make it ignore the template and just display this value
  description: "Page motifs",
};

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/motifs", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    const data = await res.json();
    return data.motifs;
  } catch (error) {
    console.log("erreur lors du fetch des motifs", error);
  }
};

const Motifs = async () => {
  try {
    const data = await getData();
    const urlImg = "/motifs/";
    return (
      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Nous proposons une grande variété de magnifiques motifs de macramé
            uniques. Bien que certains soient légèrement plus difficiles que
            d'autres, tout le monde sera en mesure de les réaliser. Notre
            instructeur vous guidera à travers chaque étape et vous aidera tout
            au long du processus.
          </p>
        </div>
        <div className={styles.cardContainer}>
          {data &&
            data.map((item, index) => {
              return (
                <Card
                  key={item._id}
                  id={item._id}
                  className={styles.card}
                  titre={item.titre}
                  description={item.description}
                  srcImg={item.srcImg}
                  altText={item.altText}
                />
              );
            })}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div> Une erreur s'est produite lors du fetching des motifs</div>;
  }
};

export default Motifs;
