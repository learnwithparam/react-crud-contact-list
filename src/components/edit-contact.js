import React from "react";
import cloneDeep from "lodash/cloneDeep";
import ContactForm from "./contact-form";

const EditContact = ({ id = 0, setContacts, ...props }) => {
  const onSubmit = (submitData) => {
    setContacts((contacts) => {
      const clonedContacts = cloneDeep(contacts);
      clonedContacts[id] = { ...submitData };
      return clonedContacts;
    });
  };

  return <ContactForm title={"Edit contact"} onSubmit={onSubmit} {...props} />;
};

export default EditContact;
