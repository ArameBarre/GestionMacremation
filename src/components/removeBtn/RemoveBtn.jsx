"use client";
import { useRouter } from "next/navigation";
import Styles from "./removeBtn.module.css";
import React from "react";

const RemoveBtn = async ({ id }) => {
  const router = useRouter();
  const removeMotif = async () => {
    const confirmed = confirm("Supprimer?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/motifs?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeMotif} className={Styles.button}>
      Supprimer
    </button>
  );
};

export default RemoveBtn;
