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

  return (
    <GlobalContext.Provider value={{ contacts, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
