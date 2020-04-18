import React, { useState } from "react";
import EditContact from "./edit-contact";

const Contact = ({ dispatch, ...props }) => {
  const { name, email, phone, id } = props;
  const [isFormActive, setFormActive] = useState(false);

  const removeContact = () => {
    const confirm = window.confirm(
      "Are you sure, you want to remove the contact?"
    );
    if (confirm) {
      dispatch({ type: "REMOVE_CONTACT", payload: { id } });
    }
  };

  return (
    <li>
      {isFormActive ? (
        <EditContact
          {...props}
          dispatch={dispatch}
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
