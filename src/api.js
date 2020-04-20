const BASE_URL = "http://localhost:4444";

export const getContacts = async () => {
  const response = await fetch(`${BASE_URL}/contacts`);
  const data = await response.json();
  return data;
};
