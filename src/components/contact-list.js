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

const ContactList = () => {
  return (
    <section>
      <button>Add new contact</button>
      <ul>
        {contacts.map((contact) => {
          return <Contact key={contact.name} {...contact} />;
        })}
      </ul>
    </section>
  );
};

export default ContactList;
