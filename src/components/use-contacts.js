import { useEffect, useReducer } from "react";
import uniqueId from "lodash/uniqueId";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return [...action.payload];
    }
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

const useContacts = () => {
  const [contacts, dispatch] = useReducer(reducer, []);

  // Initial contacts loaded from localStorage
  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      const localContacts = JSON.parse(localStorage.getItem("contacts"));
      dispatch({ type: "INIT", payload: localContacts });
    }
  }, []); // Load only once after the component mounts

  // Save contacts data to localStorage when contacts state change
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return [contacts, dispatch];
};

export default useContacts;
