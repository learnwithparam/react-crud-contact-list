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
            id={index} // Unique identifier to update the contact
            setContacts={setContacts}
          />
        );
      })}
    </ol>
  );
};

export default ContactList;
