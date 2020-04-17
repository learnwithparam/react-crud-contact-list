import React from "react";
import EditContact from "./edit-contact";

const Contact = ({ setContacts, ...props }) => {
  const { name, email, phone, id } = props;

  return (
    <li>
      <h3>{name}</h3>
      <div>
        <strong>{email}</strong>
      </div>
      <div>{phone}</div>
      <EditContact
        id={id}
        name={name}
        phone={phone}
        email={email}
        setContacts={setContacts}
      />
      <button>Remove</button>
    </li>
  );
};

export default Contact;
