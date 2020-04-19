import React, { useState, useContext } from "react";
import EditContact from "./edit-contact";
import { GlobalContext } from "./global-state";

const Contact = (props) => {
  const { dispatch } = useContext(GlobalContext);
  const { name, email, phone, id } = props;
  const [isFormActive, setFormActive] = useState(false);

  const onEdit = () => {
    setFormActive(true);
  };

  const onRemove = () => {
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
        <EditContact {...props} setFormActive={setFormActive} />
      ) : (
        <React.Fragment>
          <h3>{name}</h3>
          <div>
            <strong>{email}</strong>
          </div>
          <div>{phone}</div>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onRemove}>Remove</button>
        </React.Fragment>
      )}
    </li>
  );
};

export default Contact;
