// AddressInput.jsx
import React from 'react';
import "../index.css";

function AddressInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="address" className="form-label">
        Address
      </label>
      <input
        type="text"
        id="address"
        name="address"
        value={value}
        onChange={onChange}
        className="form-input"
        placeholder="Address"
        required
      />
    </div>
  );
}

export default AddressInput;
