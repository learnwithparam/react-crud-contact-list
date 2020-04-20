import React, { useState } from "react";
import ContactList from "./components/contact-list";
import AddContact from "./components/add-contact";
import GlobalProvider from "./components/global-state";

function App() {
  const [unwantedState, setUnwantedState] = useState(false);

  return (
    <>
      <button onClick={() => setUnwantedState(!unwantedState)}>
        unwantedState click => {`${unwantedState}`}
      </button>
      <GlobalProvider>
        <AddContact />
        <ContactList />
      </GlobalProvider>
    </>
  );
}

export default App;
