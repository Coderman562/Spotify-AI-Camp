import React from 'react';
import "../index.css";

function MiddleNameInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="middleName" className="form-label">
        Middle Name (optional)
      </label>
      <input
        type="text"
        id="middleName"
        name="middleName"
        value={value}
        onChange={onChange}
        className="form-input"
      />
    </div>
  );
}

export default MiddleNameInput;
