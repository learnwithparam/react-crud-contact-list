import React, { createContext } from "react";
import useContacts from "./use-contacts";

const INITIAL_STATE = {
  contacts: [],
  dispatch: () => {},
};

export const GlobalContext = createContext(INITIAL_STATE);

const GlobalProvider = ({ children }) => {
  const [contacts, dispatch] = useContacts();

  return (
    <GlobalContext.Provider value={{ contacts, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
