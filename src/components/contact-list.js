import React from "react";
import Contact from "./contact";

const ContactList = ({ contacts, setContacts }) => {
  return (
    <ol>
      {contacts.map((contact, index) => {
        return (
          <Contact
            key={contact.name}
            {...contact}
            id={index}
            setContacts={setContacts}
          />
        );
      })}
    </ol>
  );
};

export default ContactList;
