import React, { useReducer } from "react";
import uniqueId from "lodash/uniqueId";
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
      const { id, ...formData } = action.payload;
      const updatedContacts = state.map((contact) => {
        if (contact.id === id) {
          return {
            id,
            ...formData,
          };
        }
        return contact;
      });
      return [...updatedContacts];
    }
    case "REMOVE_CONTACT": {
      const { id } = action.payload;
      const updatedContacts = state.filter((contact) => contact.id !== id);
      return [...updatedContacts];
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
