import React, { useState } from "react";
import ContactForm from "./contact-form";
import { useGlobalStore } from "./global-state";

const AddContactForm = (props) => {
  const { addContact } = useGlobalStore();

  const onSubmit = (submitData) => {
    addContact({ ...submitData });
  };

  return (
    <ContactForm title={"Add new contact"} onSubmit={onSubmit} {...props} />
  );
};

const AddContact = () => {
  const [isFormActive, setFormActive] = useState(false);

  return (
    <React.Fragment>
      {isFormActive ? (
        <AddContactForm setFormActive={setFormActive} />
      ) : (
        <button onClick={() => setFormActive(true)}>Add new contact</button>
      )}
    </React.Fragment>
  );
};

export default AddContact;
