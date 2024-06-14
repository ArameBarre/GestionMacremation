"use client";
import React from "react";
import Styles from "./tableMotifs.module.css";
import Image from "next/image";
import RemoveBtn from "@/components/removeBtn/RemoveBtn";

const TableMotifs = async () => {
  const getMotifs = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/motifs", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Erreur lors du fetching motifs");
      }
      const data = await res.json();
      return data.motifs; // Accédez à la propriété 'events' de la réponse JSON
    } catch (error) {
      console.log("Error loading motifs : ", error);
    }
  };
  const motifs = await getMotifs();

  return (
    <>
      <table className={Styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Place</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {motifs?.map((element) => (
            <tr key={element._id}>
              <td>
                <div style={{ display: "flex", gap: "5px" }}>
                  <Image
                    src={`/${element.srcImg || "noimg.jpg"}`}
                    alt={element.altText}
                    width={50}
                    height={50}
                    style={{ borderRadius: "10px" }}
                  />
                  {element.titre}
                </div>
              </td>
              <td>{element.description}</td>
              <td>{element.difficulte}</td>
              <td>{element.prix}</td>
              <td>
                <RemoveBtn id={element._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableMotifs;
