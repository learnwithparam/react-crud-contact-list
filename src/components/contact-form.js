import React from "react";
import FormInput from "./form-input";
import useContactForm from "./use-contact-form";

const ContactForm = ({
  name = "",
  phone = "",
  email = "",
  title,
  setFormActive,
  ...props
}) => {
  const [formValues, dispatchForm] = useContactForm({
    name,
    phone,
    email,
  });

  const resetForm = () => {
    dispatchForm({ type: "RESET" });
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
    dispatchForm({ type: "UPDATE", payload: { [key]: value } });
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
