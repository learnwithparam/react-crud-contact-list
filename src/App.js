import React, { useState } from "react";
import ContactList from "./components/contact-list";
import AddContact from "./components/add-contact";

const INITIAL_CONTACTS = [
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

function App() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  return (
    <section>
      <AddContact setContacts={setContacts} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </section>
  );
}

export default App;
