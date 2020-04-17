import React, { useState } from "react";
import cloneDeep from "lodash/cloneDeep";
import EditContact from "./edit-contact";

const Contact = ({ setContacts, ...props }) => {
  const { name, email, phone, id } = props;
  const [isFormActive, setFormActive] = useState(false);

  const removeContact = () => {
    const confirm = window.confirm(
      "Are you sure, you want to remove the contact?"
    );
    if (confirm) {
      setContacts((contacts) => {
        const clonedContacts = cloneDeep(contacts);
        clonedContacts.splice(id, 1);
        return clonedContacts;
      });
    }
  };

  return (
    <li>
      {isFormActive ? (
        <EditContact
          {...props}
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
          <button onClick={removeContact}>Remove</button>
        </React.Fragment>
      )}
    </li>
  );
};

export default Contact;
