import React from 'react';
import "../index.css";

function FirstNameInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="firstName" className="form-label">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={value}
        onChange={onChange}
        className="form-input"
        required
      />
    </div>
  );
}

export default FirstNameInput;
