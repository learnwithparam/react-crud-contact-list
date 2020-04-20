import React from "react";
import ContactList from "./components/contact-list";
import AddContact from "./components/add-contact";
import GlobalProvider from "./components/global-state";

function App() {
  return (
    <>
      <GlobalProvider>
        <AddContact />
        <ContactList />
      </GlobalProvider>
    </>
  );
}

export default App;
