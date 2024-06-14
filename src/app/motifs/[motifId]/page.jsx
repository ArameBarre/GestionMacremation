import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Styles from "./motifDetails.module.css";
import TemplatePage from "@/components/templatePage/TemplatePage";

//new
const getMotifById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/motifs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erreur lors du fetching data");
  }

  const data = await res.json();
  return data.motif;
};

const MotifDetails = async ({ params }) => {
  const motif = await getMotifById(params.motifId);
  const urlImage = `/${motif.srcImg}`;

  return (
    <div className={Styles.container}>
      <Link
        className={Styles.link}
        style={{ fontSize: "1.5rem", color: "var(--txtBlack)" }}
        key={motif.id}
        href="/motifs"
      >
        {"< Retour a la liste"}
      </Link>
      {motif ? (
        <>
          <TemplatePage
            //key={motif._id}
            titre={motif.titre}
            description={motif.description}
            difficulte={motif.difficulte}
            prix={motif.prix}
            srcImg={urlImage}
            altText={motif.altText}
          />
        </>
      ) : (
        <div>Motif non trouvé !</div>
      )}
    </div>
  );
};

export default MotifDetails;
