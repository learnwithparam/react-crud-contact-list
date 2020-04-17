import React from "react";
import cloneDeep from "lodash/cloneDeep";
import findIndex from "lodash/findIndex";
import ContactForm from "./contact-form";

const EditContact = ({ id, setContacts, ...props }) => {
  const onSubmit = (submitData) => {
    setContacts((contacts) => {
      const clonedContacts = cloneDeep(contacts);
      const index = findIndex(clonedContacts, { id });
      clonedContacts[index] = { ...clonedContacts[index], ...submitData };
      return clonedContacts;
    });
  };

  return <ContactForm title={"Edit contact"} onSubmit={onSubmit} {...props} />;
};

export default EditContact;
