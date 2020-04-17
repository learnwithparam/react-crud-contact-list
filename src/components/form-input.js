import React from "react";

const FormInput = ({ label, value, onChange, ...props }) => {
  const inputId = label.toLowerCase();

  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        name={inputId}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default FormInput;
