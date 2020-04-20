import React from "react";
import ContactForm from "./contact-form";
import { useGlobalStore } from "./global-state";

const AddContact = () => {
  const { addContact } = useGlobalStore();

  const onSubmit = (submitData) => {
    addContact({ ...submitData });
  };

  return <ContactForm title={"Add new contact"} onSubmit={onSubmit} />;
};

export default AddContact;
