import React from "react";
import Styles from "./admin.module.css";
import Link from "next/link";
import RemoveBtn from "@/components/removeBtn/RemoveBtn";
import Image from "next/image";
import TableMotifs from "@/components/tableMotifs/TableMotifs";

export const metadata = {
  title: "Admin", //absolute will make it ignore the template and just display this value
  description: "Page admin",
};

/*
const getMotifs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/motifs", {
      //or just "/api/events"
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error fetching motifs");
    }
    const data = res.json();
    return data.motifs;
  } catch (error) {
    console.log("Error fetching data", error);
  }
};
*/

const pageAmin = async () => {
  //const motifs = await getMotifs();
  //console.log(motifs);

  return (
    <div className={Styles.container}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ fontSize: "1.5rem", color: "var(--txtBlack)" }}>
          Page Admin - Liste des motifs
        </h1>
        <Link href="/admin/addEvent" className={Styles.button}>
          Ajouter un motif
        </Link>
      </div>
      <TableMotifs />
    </div>
  );
};

export default pageAmin;
