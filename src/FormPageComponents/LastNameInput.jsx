import React from 'react';
import "index.css";

function LastNameInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="lastName" className="form-label">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={value}
        onChange={onChange}
        className="form-input"
        required
      />
    </div>
  );
}

export default LastNameInput;
