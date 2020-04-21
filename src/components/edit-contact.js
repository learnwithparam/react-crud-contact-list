import React from "react";
import { useHistory } from "react-router-dom";
import ContactForm from "./contact-form";
import { useGlobalStore } from "./global-state";
import { putContacts } from "../api";

const EditContact = (props) => {
  const id = props.match.params.id;
  const history = useHistory();
  const { editContact } = useGlobalStore();

  const onSubmit = (submitData) => {
    const payload = { id, ...submitData };
    (async () => {
      const data = await putContacts(payload);
      editContact(data);
      history.push("/");
    })();
  };

  return <ContactForm id={id} title={"Edit contact"} onSubmit={onSubmit} />;
};

export default EditContact;
