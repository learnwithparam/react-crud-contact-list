import React from "react";
import Contact from "./contact";

const ContactList = ({ contacts, dispatch }) => {
  return (
    <ol>
      {contacts.map((contact) => {
        return <Contact key={contact.id} {...contact} dispatch={dispatch} />;
      })}
    </ol>
  );
};

export default ContactList;
