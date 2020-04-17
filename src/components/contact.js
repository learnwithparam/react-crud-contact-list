import React, { useState } from "react";
import EditContact from "./edit-contact";

const Contact = ({ setContacts, ...props }) => {
  const { name, email, phone, id } = props;
  const [isFormActive, setFormActive] = useState(false);

  return (
    <li>
      {isFormActive ? (
        <EditContact
          id={id}
          name={name}
          phone={phone}
          email={email}
          setContacts={setContacts}
          setFormActive={setFormActive}
        />
      ) : (
        <React.Fragment>
          <h3>{name}</h3>
          <div>
            <strong>{email}</strong>
          </div>
          <div>{phone}</div>
          <button onClick={() => setFormActive(true)}>Edit</button>
          <button>Remove</button>
        </React.Fragment>
      )}
    </li>
  );
};

export default Contact;
