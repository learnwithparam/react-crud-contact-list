import React, { useState } from "react";
import AddContact from "./add-contact";
import EditContact from "./edit-contact";

const initialContacts = [
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

const Contact = (props) => {
  const { name, email, phone } = props;

  return (
    <li>
      <h3>{name}</h3>
      <div>
        <strong>{email}</strong>
      </div>
      <div>{phone}</div>
      <EditContact {...props} />
      <button>Remove</button>
    </li>
  );
};

const ContactList = () => {
  const [contacts, setContact] = useState(initialContacts);
  return (
    <section>
      <AddContact setContact={setContact} />
      <ol>
        {contacts.map((contact) => {
          return (
            <Contact key={contact.name} {...contact} setContact={setContact} />
          );
        })}
      </ol>
    </section>
  );
};

export default ContactList;
