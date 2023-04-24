// AddressInput.jsx
import React from 'react';
import "../index.css";

function AddressInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="address" className="form-label">
        Address (optional)
      </label>
      <input
        type="text"
        id="address"
        name="address"
        value={value}
        onChange={onChange}
        className="form-input"
        placeholder="Address"
      />
    </div>
  );
}

export default AddressInput;