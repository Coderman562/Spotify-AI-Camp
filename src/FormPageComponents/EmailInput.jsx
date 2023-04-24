import React from 'react';
import "../index.css";

function EmailInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="email" className="form-label">
        Email (optional)
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={onChange}
        className="form-input"
      />
    </div>
  );
}

export default EmailInput;
