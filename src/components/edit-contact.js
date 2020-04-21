import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ContactForm from "./contact-form";
import { useGlobalStore } from "./global-state";
import { putContacts } from "../api";

const EditContact = (props) => {
  const id = props.match.params.id;
  const history = useHistory();
  const { editContact } = useGlobalStore();
  const [error, setError] = useState("");

  const onSubmit = (submitData) => {
    const payload = { ...submitData };
    (async () => {
      const { data, error } = await putContacts(payload);
      if (error) {
        setError(error.message);
      } else {
        editContact(data);
        history.push("/");
      }
    })();
  };

  return (
    <>
      {error ? <div>{error}</div> : null}
      <ContactForm id={id} title={"Edit contact"} onSubmit={onSubmit} />
    </>
  );
};

export default EditContact;
