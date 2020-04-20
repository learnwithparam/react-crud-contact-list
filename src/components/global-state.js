import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import useContacts from "./use-contacts";
import useContactsStorage from "./use-contacts-storage";

const INITIAL_STATE = {};

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

  const addContacts = useCallback(
    (payload) => {
      dispatch({ type: "INIT", payload });
    },
    [dispatch]
  );

  const addContact = useCallback(
    (payload) => {
      dispatch({ type: "ADD_CONTACT", payload });
    },
    [dispatch]
  );

  const editContact = useCallback(
    (payload) => {
      dispatch({ type: "EDIT_CONTACT", payload });
    },
    [dispatch]
  );

  const removeContact = useCallback(
    (id) => {
      dispatch({ type: "REMOVE_CONTACT", payload: { id } });
    },
    [dispatch]
  );

  // Save and retrieve happens here
  useContactsStorage({ key: "contacts", contacts, addContacts });

  const context = {
    contacts,
    removeContact,
    editContact,
    addContact,
    addContacts,
  };

  useEffect(() => {
    console.log("editContact recreated");
  }, [editContact]);

  useEffect(() => {
    console.log("addContacts not recreated");
  }, [addContacts]);

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
