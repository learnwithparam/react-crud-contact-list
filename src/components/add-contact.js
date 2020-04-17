import React, { useState } from "react";
import uniqueId from "lodash/uniqueId";
import ContactForm from "./contact-form";

const AddContactForm = ({ setContacts, ...props }) => {
  const onSubmit = (submitData) => {
    setContacts((contacts) => {
      return [
        {
          id: uniqueId(),
          ...submitData,
        },
        ...contacts,
      ];
    });
  };

  return (
    <ContactForm title={"Add new contact"} onSubmit={onSubmit} {...props} />
  );
};

const AddContact = ({ setContacts }) => {
  const [isFormActive, setFormActive] = useState(false);

  return (
    <React.Fragment>
      {isFormActive ? (
        <AddContactForm
          setContacts={setContacts}
          setFormActive={setFormActive}
        />
      ) : (
        <button onClick={() => setFormActive(true)}>Add new contact</button>
      )}
    </React.Fragment>
  );
};

export default AddContact;
