import React from 'react';
import "../index.css";

function PhoneNumberInput({ value, onChange, onBlur, phoneError }) {
  return (
    <div className="form-group">
      <label htmlFor="phoneNumber" className="form-label">
        Phone Number (optional)
      </label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={value}
        onChange={onChange}
        className="form-input"
        pattern="\d{10}" // Accepts 10-digit phone numbers without dashes
        title="Phone number must be 10 digits"
        required={false} // Optional field
        onBlur={onBlur}
      />
      {phoneError && <p className="error-message">{phoneError}</p>}
    </div>
  );
}

export default PhoneNumberInput
