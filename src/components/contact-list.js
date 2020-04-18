import React from "react";
import Contact from "./contact";

const ContactList = ({ contacts, setContacts }) => {
  return (
    <ol>
      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} {...contact} setContacts={setContacts} />
        );
      })}
    </ol>
  );
};

export default ContactList;
