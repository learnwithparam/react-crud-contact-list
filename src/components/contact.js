import React, { useState } from "react";
import EditContact from "./edit-contact";
import { useGlobalStore } from "./global-state";

const UnMemoizedContactItem = ({ name, email, phone }) => {
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <div>
        <strong>{email}</strong>
      </div>
      <div>{phone}</div>
    </React.Fragment>
  );
};

const ContactItem = React.memo(UnMemoizedContactItem);

const Contact = (props) => {
  const { removeContact } = useGlobalStore();
  const { id } = props;
  const [isFormActive, setFormActive] = useState(false);

  const onEdit = () => {
    setFormActive(true);
  };

  const onRemove = () => {
    const confirm = window.confirm(
      "Are you sure, you want to remove the contact?"
    );
    if (confirm) {
      removeContact(id);
    }
  };

  return (
    <li>
      {isFormActive ? (
        <EditContact {...props} setFormActive={setFormActive} />
      ) : (
        <React.Fragment>
          <ContactItem {...props} />
          <button onClick={onEdit}>Edit</button>
          <button onClick={onRemove}>Remove</button>
        </React.Fragment>
      )}
    </li>
  );
};

export default Contact;
