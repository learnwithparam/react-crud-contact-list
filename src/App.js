import React from "react";
import ContactList from "./components/contact-list";
import AddContact from "./components/add-contact";
import useContacts from "./components/use-contacts";

function App() {
  const [contacts, dispatch] = useContacts();

  return (
    <section>
      <AddContact dispatch={dispatch} />
      <ContactList contacts={contacts} dispatch={dispatch} />
    </section>
  );
}

export default App;
