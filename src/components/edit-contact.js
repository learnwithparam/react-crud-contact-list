import React from "react";
import ContactForm from "./contact-form";
import { useGlobalStore } from "./global-state";

const EditContact = ({ id, ...props }) => {
  const { dispatch } = useGlobalStore();

  const onSubmit = (submitData) => {
    dispatch({ type: "EDIT_CONTACT", payload: { id, ...submitData } });
  };

  return <ContactForm title={"Edit contact"} onSubmit={onSubmit} {...props} />;
};

export default EditContact;
