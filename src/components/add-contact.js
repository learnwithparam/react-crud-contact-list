import React, { useState } from "react";

const AddContact = ({ setContact }) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && phone) {
      setContact((previousContacts) => {
        return [
          {
            name,
            phone,
            email,
          },
          ...previousContacts,
        ];
      });

      // Reset form values
      setName("");
      setPhone("");
      setEmail("");

      // Close the form after saving new contact
      setShowForm(false);
    }
  };

  return (
    <React.Fragment>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="contact name"
              name="Name"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              required
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="contact phone"
              name="Phone"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="contact Email"
              name="Email"
            />
          </div>
          <button type="submit">Save contact</button>
          <button onClick={() => setShowForm(false)}>Discard</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Add new contact</button>
      )}
    </React.Fragment>
  );
};

export default AddContact;
