import React, { createContext, useContext } from "react";
import useContacts from "./use-contacts";

const INITIAL_STATE = {
  contacts: [],
};

const GlobalContext = createContext(INITIAL_STATE);

export const useGlobalStore = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("Consumer should be wrapped inside the Provider");
  }

  return context;
};

const GlobalProvider = ({ children }) => {
  const [contacts, dispatch] = useContacts();

  const addContact = (payload) => {
    dispatch({ type: "ADD_CONTACT", payload });
  };

  const editContact = (payload) => {
    dispatch({ type: "EDIT_CONTACT", payload });
  };

  const removeContact = (id) => {
    dispatch({ type: "REMOVE_CONTACT", payload: { id } });
  };

  return (
    <GlobalContext.Provider
      value={{ contacts, removeContact, editContact, addContact }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
