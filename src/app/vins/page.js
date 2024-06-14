import vinData from "../../data/wine-data.json";
import React from "react";
import styles from "./vins.module.css";
import WineCard from "@/components/wine-card/WineCard";
import vin from "../../../public/vin.jpeg";
import Image from "next/image";

function Vins() {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Tous nos vins sont choisis à la main avec soin, et nous privilégions
          souvent les vins canadiens et les vins naturels. Nous sommes
          convaincus que chacun de nos vins accompagnera à merveille votre
          création, et tous sont délicieux. Pendant l'atelier, notre enseignant
          passionné vous fera découvrir chaque vin, vous décrivant ses
          caractéristiques et vous permettant de savourer pleinement chaque
          gorgée. N'hésitez pas à cliquer sur chaque vin pour en savoir plus.
          Nous avons hâte de partager cette expérience inoubliable avec vous!
        </p>
      </div>
      <div className={styles.wineCardContainer}>
        {vinData.map((item, index) => {
          return (
            <WineCard
              key={index}
              className={styles.wineCard}
              name={item.name}
              description={item.description}
              src={item.src}
              alt={item.alt}
              vignoble={item.vignoble}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Vins;
