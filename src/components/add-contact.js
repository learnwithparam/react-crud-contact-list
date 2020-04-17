import React, { useState } from "react";
import FormInput from "./form-input";

const AddContactForm = ({ setContacts, setFormActive }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const resetForm = () => {
    // Reset form values
    setName("");
    setPhone("");
    setEmail("");

    // Close the form after saving new contact
    setFormActive(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name && email && phone) {
      setContacts((contacts) => {
        return [
          {
            name,
            phone,
            email,
          },
          ...contacts,
        ];
      });
    }

    resetForm();
  };

  const onDiscard = () => {
    resetForm();
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <FormInput
          type="text"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Contact name"
          required
        />
        <FormInput
          type="text"
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Contact phone"
          required
        />
        <FormInput
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Contact email"
          required
        />
        <button type="submit">Save contact</button>
        <button type="button" onClick={onDiscard}>
          Discard
        </button>
      </form>
    </React.Fragment>
  );
};

const AddContact = ({ setContacts }) => {
  const [isFormActive, setFormActive] = useState(false);

  return (
    <React.Fragment>
      {isFormActive ? (
        <AddContactForm
          setContacts={setContacts}
          setFormActive={setFormActive}
        />
      ) : (
        <button onClick={() => setFormActive(true)}>Add new contact</button>
      )}
    </React.Fragment>
  );
};

export default AddContact;
