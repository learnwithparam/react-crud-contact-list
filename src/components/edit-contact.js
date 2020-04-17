import React, { useState } from "react";
import cloneDeep from "lodash/cloneDeep";

const EditContactForm = ({
  name = "",
  phone = "",
  email = "",
  id = 0,
  setContacts,
  setFormActive,
}) => {
  const [form, setForm] = useState({ name, phone, email });

  const resetForm = () => {
    setFormActive(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = form;
    if (name && email && phone) {
      // Save the edited content
      setContacts((contacts) => {
        const clonedContacts = cloneDeep(contacts);
        clonedContacts[id] = {
          name,
          email,
          phone,
        };
        return clonedContacts;
      });
    }

    resetForm();
  };

  const onDiscard = () => {
    resetForm();
  };

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm((previousFormValue) => {
      return {
        ...previousFormValue,
        [key]: value,
      };
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={form.name}
          onChange={onChange}
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
          value={form.phone}
          onChange={onChange}
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
          value={form.email}
          onChange={onChange}
          type="email"
          placeholder="Contact email"
          name="email"
          id="email"
          required
        />
      </div>
      <button type="submit">Save</button>
      <button onClick={onDiscard}>Discard</button>
    </form>
  );
};

const EditContact = (props) => {
  const [isFormActive, setFormActive] = useState(false);

  return (
    <React.Fragment>
      {isFormActive ? (
        <EditContactForm {...props} setFormActive={setFormActive} />
      ) : (
        <button onClick={() => setFormActive(true)}>Edit</button>
      )}
    </React.Fragment>
  );
};

export default EditContact;
