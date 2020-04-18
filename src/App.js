import React, { useReducer } from "react";
import uniqueId from "lodash/uniqueId";
import cloneDeep from "lodash/cloneDeep";
import findIndex from "lodash/findIndex";
import ContactList from "./components/contact-list";
import AddContact from "./components/add-contact";

const INITIAL_CONTACTS = [
  {
    id: uniqueId(),
    name: "Vennila",
    phone: "+372 5993789",
    email: "venil.par@gmail.com",
  },
  {
    id: uniqueId(),
    name: "Afrin",
    phone: "+372 5663421",
    email: "afrin.ven@gmail.com",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT": {
      return [
        {
          id: uniqueId(),
          ...action.payload,
        },
        ...state,
      ];
    }
    case "EDIT_CONTACT": {
      const { id, ...submitData } = action.payload;
      const clonedContacts = cloneDeep(state);
      const index = findIndex(clonedContacts, { id });
      clonedContacts[index] = {
        ...clonedContacts[index],
        ...submitData,
      };
      return clonedContacts;
    }
    case "REMOVE_CONTACT": {
      const { id } = action.payload;
      const clonedContacts = cloneDeep(state);
      const index = findIndex(clonedContacts, { id });
      clonedContacts.splice(index, 1);
      return clonedContacts;
    }
    default:
      return state;
  }
};

function App() {
  const [contacts, dispatch] = useReducer(reducer, INITIAL_CONTACTS);

  return (
    <section>
      <AddContact dispatch={dispatch} />
      <ContactList contacts={contacts} dispatch={dispatch} />
    </section>
  );
}

export default App;
