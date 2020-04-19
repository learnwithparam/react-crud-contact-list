import React from "react";
import ContactForm from "./contact-form";
import { useGlobalStore } from "./global-state";

const EditContact = ({ id, ...props }) => {
  const { editContact } = useGlobalStore();

  const onSubmit = (submitData) => {
    editContact({ id, ...submitData });
  };

  return <ContactForm title={"Edit contact"} onSubmit={onSubmit} {...props} />;
};

export default EditContact;
