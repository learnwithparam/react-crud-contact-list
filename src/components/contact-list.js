import React from "react";
import Contact from "./contact";

const ContactList = ({ contacts }) => {
  return (
    <ol>
      {contacts.map((contact) => {
        return <Contact key={contact.name} {...contact} />;
      })}
    </ol>
  );
};

export default ContactList;
