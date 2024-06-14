"use client";
import { useRouter } from "next/navigation";
import Styles from "./addEvent.module.css";
import React, { useState } from "react";

const AddEvent = () => {
  const router = useRouter();

  //this is important!
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    difficulte: "",
    prix: "",
    srcImg: "",
    altText: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/motifs", {
        method: "POST",
        header: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        console.log("Error");
      } else {
        console.log("Motif created!");
        router.push("/admin");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={Styles.container}>
        <h1
          className={Styles.header}
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Ajouter un motif
        </h1>
        <input
          type="text"
          name="titre"
          value={formData.titre}
          onChange={handleChange}
          placeholder="Titre"
        ></input>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          aria-rowspan={3}
        ></input>
        <input
          type="text"
          name="difficulte"
          value={formData.difficulte}
          onChange={handleChange}
          placeholder="Difficulté"
        ></input>
        <input
          type="text"
          name="prix"
          value={formData.prix}
          onChange={handleChange}
          placeholder="Prix"
        ></input>
        <input
          type="text"
          name="srcImg"
          value={formData.srcImg}
          onChange={handleChange}
          placeholder="img"
        ></input>
        <button type="Submit">Submit</button>
      </form>
    </>
  );
};

export default AddEvent;
