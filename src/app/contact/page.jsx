import ContactForm from "@/components/contactForm/ContactForm";
import React from "react";

export const metadata = {
  title: "Contact", //absolute will make it ignore the template and just display this value
  description: "Page contact",
};

const Contact = () => {
  console.log("ca fonctionne ici");
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
