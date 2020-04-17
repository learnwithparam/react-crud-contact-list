import React, { useState } from "react";

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
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Contact name"
            name="name"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Contact phone"
            name="phone"
            id="phone"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Contact email"
            name="email"
            id="email"
            required
          />
        </div>
        <button type="submit">Save contact</button>
      </form>
      <button onClick={onDiscard}>Discard</button>
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
