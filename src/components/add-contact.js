import React, { useState } from "react";
import ContactForm from "./contact-form";
import { useGlobalStore } from "./global-state";

const AddContactForm = (props) => {
  const { dispatch } = useGlobalStore();

  const onSubmit = (submitData) => {
    dispatch({ type: "ADD_CONTACT", payload: { ...submitData } });
  };

  return (
    <ContactForm title={"Add new contact"} onSubmit={onSubmit} {...props} />
  );
};

const AddContact = ({ dispatch }) => {
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
