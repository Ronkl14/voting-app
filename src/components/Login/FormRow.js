import React from "react";

const FormRow = ({ type, name, value, handleChange, error }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className={`form-input ${error && "error"}`}
      />
    </div>
  );
};

export default FormRow;
