"use client";
import React, { useState } from "react";
import Styles from "./contactForm.module.css";

function validation(value) {
  let error = {};

  if (!value.nomprenom) {
    error.nomprenom = "Nom et prenom est requis";
  }
  if (!value.email) {
    error.email = "Email est requis";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.email)) {
    error.email = "Email invalide";
  }

  if (!value.message) {
    error.message = "Message requis";
  } else if (value.message.length < 5) {
    error.message = "Message trop court";
  }
  return error;
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nomprenom: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validation(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form valide");
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
    setFormData({
      nomprenom: "",
      email: "",
      message: "",
    });
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors(validation({ ...formData, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={Styles.container}>
        <h1 className={Styles.title}>Contacter-nous</h1>
        <input
          type="text"
          name="nomprenom"
          value={formData.nomprenom}
          onChange={handlechange}
          placeholder="Nom Prenom"
        />
        {errors.nomprenom && (
          <div className={Styles.error}>{errors.nomprenom}</div>
        )}
        <textarea
          type="text"
          name="message"
          value={formData.message}
          onChange={handlechange}
          row={3}
          placeholder="Régider votre message"
        />
        {errors.message && <div className={Styles.error}>{errors.message}</div>}
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handlechange}
          placeholder="Email"
        />
        {errors.email && <div className={Styles.error}>{errors.email}</div>}
        {isSubmit && (
          <div className={Styles.confirmation}>
            Votre message est bien reçu :)
          </div>
        )}
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

export default ContactForm;
