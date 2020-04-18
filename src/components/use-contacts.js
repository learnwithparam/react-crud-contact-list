import { useReducer } from "react";
import cuid from "cuid";
import useContactsStorage from "./use-contacts-storage";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return [...action.payload];
    }
    case "ADD_CONTACT": {
      return [
        {
          id: cuid(),
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

const useContacts = () => {
  const [contacts, dispatch] = useReducer(reducer, []);
  // Save and retrieve happens here
  useContactsStorage({ key: "contacts", contacts, dispatch });

  return [contacts, dispatch];
};

export default useContacts;
