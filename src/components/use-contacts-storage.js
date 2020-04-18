import { useEffect } from "react";

const useContactsStorage = ({ key, contacts, dispatch }) => {
  // Initial contacts loaded from localStorage
  useEffect(() => {
    if (localStorage.getItem(key)) {
      const localContacts = JSON.parse(localStorage.getItem(key));
      dispatch({ type: "INIT", payload: localContacts });
    }
  }, [key, dispatch]); // Load only once after the component mounts

  // Save contacts data to localStorage when contacts state change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(contacts));
  }, [contacts, key]);
};

export default useContactsStorage;
