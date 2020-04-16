import React, { useState } from "react";

const EditContact = ({ name = "", email = "", phone = "", setContact }) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState(name);
  const [phone, setPhone] = useState(email);
  const [email, setEmail] = useState(phone);

  const resetForm = () => {
    // Reset form values
    setName("");
    setPhone("");
    setEmail("");

    // Close the form after saving new contact
    setShowForm(false);
  };

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
    }

    resetForm();
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
          <button onClick={resetForm}>Discard</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Edit contact</button>
      )}
    </React.Fragment>
  );
};

export default EditContact;
