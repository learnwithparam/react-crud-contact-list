import React, { useContext } from "react";
import ContactForm from "./contact-form";
import { GlobalContext } from "./global-state";

const EditContact = ({ id, ...props }) => {
  const { dispatch } = useContext(GlobalContext);

  const onSubmit = (submitData) => {
    dispatch({ type: "EDIT_CONTACT", payload: { id, ...submitData } });
  };

  return <ContactForm title={"Edit contact"} onSubmit={onSubmit} {...props} />;
};

export default EditContact;
