import React from 'react';
import "../index.css";

function DateInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="date" className="form-label">
        Date
      </label>
      <input
        type="date"
        id="date"
        name="date"
        value={value}
        onChange={onChange}
        className="form-input"
        required
      />
    </div>
  );
}

export default DateInput;
