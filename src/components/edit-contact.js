import React, { useState } from "react";
import cloneDeep from "lodash/cloneDeep";
import FormInput from "./form-input";

const EditContact = ({
  name = "",
  phone = "",
  email = "",
  id = 0,
  setContacts,
  setFormActive,
}) => {
  const [form, setForm] = useState({ name, phone, email });

  const resetForm = () => {
    setForm({ name: "", phone: "", email: "" });
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
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <FormInput
          type="text"
          label="Name"
          value={form.name}
          onChange={onChange}
          placeholder="Contact name"
          required
        />
        <FormInput
          type="text"
          label="Phone"
          value={form.phone}
          onChange={onChange}
          placeholder="Contact phone"
          required
        />
        <FormInput
          type="email"
          label="Email"
          value={form.email}
          onChange={onChange}
          placeholder="Contact email"
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onDiscard}>
          Discard
        </button>
      </form>
    </React.Fragment>
  );
};

export default EditContact;
