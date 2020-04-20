import React from "react";
import ContactForm from "./contact-form";
import { useGlobalStore } from "./global-state";

const EditContact = (props) => {
  const id = props.match.params.id;
  const { editContact } = useGlobalStore();

  const onSubmit = (submitData) => {
    editContact({ id, ...submitData });
  };

  return <ContactForm id={id} title={"Edit contact"} onSubmit={onSubmit} />;
};

export default EditContact;
