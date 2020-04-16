import React from "react";

const Contact = (props) => {
  const { name, email, phone } = props;

  return (
    <li>
      <h3>{name}</h3>
      <div>
        <strong>{email}</strong>
      </div>
      <div>{phone}</div>
      <button>Edit</button>
      <button>Remove</button>
    </li>
  );
};

export default Contact;
