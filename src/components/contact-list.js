import React, { useContext } from "react";
import Contact from "./contact";
import { GlobalContext } from "./global-state";

const EmptyContactList = () => {
  return <div>No contacts yet</div>;
};

const ContactList = () => {
  const { contacts } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <ol>
        {contacts.map((contact) => {
          return <Contact key={contact.id} {...contact} />;
        })}
      </ol>
      {contacts.length === 0 && <EmptyContactList />}
    </React.Fragment>
  );
};

export default ContactList;
