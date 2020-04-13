import React from "react";

const contacts = [
  {
    name: "Vennila",
    phone: "+372 5993789",
    email: "venil.par@gmail.com",
  },
  {
    name: "Afrin",
    phone: "+372 5663421",
    email: "afrin.ven@gmail.com",
  },
];

const Contact = ({ name, email, phone }) => {
  return (
    <li key={name}>
      <h3>{name}</h3>
      <div>
        <strong>{email}</strong>
      </div>
      <div>{phone}</div>
    </li>
  );
};

const ContactList = () => {
  return (
    <ul>
      {contacts.map((contact) => {
        return <Contact {...contact} />;
      })}
    </ul>
  );
};

export default ContactList;
