import React from "react";
import { useHistory } from "react-router-dom";
import { useGlobalStore } from "./global-state";
import { deleteContacts } from "../api";

const ContactItem = ({ name, email, phone }) => {
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

const MemoizedContactItem = React.memo(ContactItem);

const Contact = (props) => {
  const history = useHistory();
  const { removeContact } = useGlobalStore();
  const { id } = props;

  const onEdit = () => {
    history.push(`/edit/${id}`);
  };

  const onRemove = () => {
    const confirm = window.confirm(
      "Are you sure, you want to remove the contact?"
    );
    if (confirm) {
      (async () => {
        await deleteContacts(id);
        removeContact(id);
      })();
    }
  };

  return (
    <li>
      <React.Fragment>
        <MemoizedContactItem {...props} />
        <button onClick={onEdit}>Edit</button>
        <button onClick={onRemove}>Remove</button>
      </React.Fragment>
    </li>
  );
};

export default Contact;
