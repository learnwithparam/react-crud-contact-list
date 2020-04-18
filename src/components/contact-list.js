import React from "react";
import Contact from "./contact";

const EmptyContactList = () => {
  return <div>No contacts yet</div>;
};

const ContactList = ({ contacts, dispatch }) => {
  return (
    <React.Fragment>
      <ol>
        {contacts.map((contact) => {
          return <Contact key={contact.id} {...contact} dispatch={dispatch} />;
        })}
      </ol>
      {contacts.length === 0 && <EmptyContactList />}
    </React.Fragment>
  );
};

export default ContactList;
