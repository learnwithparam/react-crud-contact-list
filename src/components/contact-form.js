import React, { useState } from "react";
import FormInput from "./form-input";

const ContactForm = ({
  name = "",
  phone = "",
  email = "",
  title,
  setFormActive,
  ...props
}) => {
  const [formValues, setFormValues] = useState({ name, phone, email });

  const resetForm = () => {
    setFormValues({ name: "", phone: "", email: "" });
    setFormActive(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = formValues;
    if (name && email && phone) {
      props.onSubmit(formValues);
    }

    resetForm();
  };

  const onDiscard = () => {
    resetForm();
  };

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormValues((previousFormValues) => {
      return {
        ...previousFormValues,
        [key]: value,
      };
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <h3>{title}</h3>
        <FormInput
          type="text"
          label="Name"
          value={formValues.name}
          onChange={onChange}
          placeholder="Contact name"
          required
        />
        <FormInput
          type="text"
          label="Phone"
          value={formValues.phone}
          onChange={onChange}
          placeholder="Contact phone"
          required
        />
        <FormInput
          type="email"
          label="Email"
          value={formValues.email}
          onChange={onChange}
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

export default ContactForm;
