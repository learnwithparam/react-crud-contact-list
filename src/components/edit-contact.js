import React from "react";
import ContactForm from "./contact-form";

const EditContact = ({ id, dispatch, ...props }) => {
  const onSubmit = (submitData) => {
    dispatch({ type: "EDIT_CONTACT", payload: { id, ...submitData } });
  };

  return <ContactForm title={"Edit contact"} onSubmit={onSubmit} {...props} />;
};

export default EditContact;
