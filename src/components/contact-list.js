import React from "react";
import Contact from "./contact";

const ContactList = ({ contacts, setContacts }) => {
  return (
    <ol>
      {contacts.map((contact, index) => {
        return (
          <Contact key={contact.id} {...contact} setContacts={setContacts} />
        );
      })}
    </ol>
  );
};

export default ContactList;
