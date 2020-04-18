import React from "react";
import ContactForm from "./contact-form";

const EditContact = ({ id, setContacts, ...props }) => {
  const onSubmit = (submitData) => {
    // Edit dispatch comes here
  };

  return <ContactForm title={"Edit contact"} onSubmit={onSubmit} {...props} />;
};

export default EditContact;
