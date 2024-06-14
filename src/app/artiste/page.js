import React from "react";
import styles from "./artiste.module.css";

export const metadata = {
  title: "Artitste", //absolute will make it ignore the template and just display this value
  description: "Page artiste",
};

const Artiste = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>L'Artiste</h1>
        <p className={styles.description}>
          Salut! Je suis le créateur et l'artiste principal de Macrame and
          Macération.{" "}
        </p>
        <p>
          J'ai commencé à faire du macramé comme passe-temps il y a quelques
          années, sans aucune connaissance préalable. Après quelques tentatives
          réussies (et quelques échecs), j'ai décidé de me lancer un défi et de
          créer une pièce originale pour chaque semaine de l'année. J'ai pris
          ces 52 pièces originales et les ai associées à deux de mes autres
          passions : le vin et l'enseignement.{" "}
        </p>
        <p>
          Macramé and Maceration vous permet de développer vos compétences
          créatives dans une ambiance détendue, tout en savourant un verre de
          vin naturel. Je vous guiderai à travers les étapes de la création de
          votre pièce de macramé et vous enseignerai les subtilités du vin
          soigneusement sélectionné pour accompagner l'œuvre d'art.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            Inscrivez-vous à une soirée M&M
          </button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img
          src="./artist.jpg"
          alt="The artist"
          style={{ borderRadius: "15px" }}
        ></img>
        {/*<Image src={srcImg} alt={altImg} fill />*}
        {/*<Image src='/cat3.png' alt="Grumpy cat" width={500} height={500}/>*/}
        {/*<img src='./cat3.png' alt="Grumpy cat" width={500} height={500}/>*/}
        {/* can also use <Image></Image>*/}
      </div>
    </div>
  );
};

export default Artiste;
