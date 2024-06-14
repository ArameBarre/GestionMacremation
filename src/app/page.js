import Image from "next/image";
import styles from "./home.module.css";
import vinorange from "../../public/vinorange.jpeg";
import Steps from "@/components/steps/steps";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.firstRow}>
        <div className={styles.firstRowText}>
          <h2 className={styles.headline}>
            Mettez en avant vos compétences artistiques tout en dégustant un
            verre de vin.
          </h2>
          <p>
            Macramé et Macération vous propose des ateliers de macramé
            accompagnés d'une sélection de vins personnalisables. Vous
            choisissez le motif, le vin et la date, et nous nous occupons du
            reste. Notre animateur professionnel vous guidera étape par étape
            dans la réalisation de votre pièce. Vous apprendrez tout en
            dégustant une boisson ou deux !
          </p>
          <p>
            Nous proposons plus de 50 options originales pour nos soirées de
            macramé et vin.
          </p>
          <p>
            Que ce soit pour célébrer une étape importante ou planifier une
            activité de renforcement d'équipe en entreprise, rien ne rassemble
            les gens comme le Macramé et la Macération !
          </p>
        </div>
        <div className={styles.firstRowImg}>
          <Image
            className={styles.example}
            src="/background2.jpeg"
            alt="macrame"
            width={500}
            height={500}
          />
        </div>
        {/*<img src='./cat3.png' alt="Grumpy cat" width={500} height={500}/>*/}
        {/* can also use <Image></Image>*/}
      </div>
      <div className={styles.headerDiv}>
        <h2>Comment ça marche</h2>
      </div>
      <div className={styles.galleryDiv}>
        <Steps
          className={styles.steps}
          icon="./icon1.png"
          num="one"
          img="./s15.jpg"
          alt="A beautiful macramé"
          text="Choisissez votre motif!"
        />
        <Steps
          className={styles.steps}
          icon="./icon2.png"
          num="two"
          img="./vins.webp"
          alt="Two glasses of wine"
          text="Choisissez votre vin!"
        />
        <Steps
          className={styles.steps}
          icon="./icon3.png"
          num="three"
          img="./calendrier.jpeg"
          alt="Calendrier"
          text="Choisissez votre date!"
        />
        <Steps
          className={styles.steps}
          icon="./icon4.png"
          num="four"
          img="./cheers.webp"
          alt="Cheers"
          text="Envoyez les invitations!"
        />
      </div>
      <div className={styles.buttonRow}>
        <button className={styles.button}>Commencez!</button>
      </div>
    </main>
  );
}

/*
        
        <div> </div>
        <Image src='/vin0.jpg' alt="Vin blanc" width={500} height={500}/>
        */
