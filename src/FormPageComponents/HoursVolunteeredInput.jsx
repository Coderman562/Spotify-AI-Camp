import React from 'react';
import "../index.css";

function HoursVolunteeredInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="hoursVolunteered" className="form-label">
        Hours Volunteered
      </label>
      <input
        type="number"
        id="hoursVolunteered"
        name="hoursVolunteered"
        value={value}
        onChange={onChange}
        className="form-input"
        step="0.5"
        required
      />
    </div>
  );
}

export default HoursVolunteeredInput;
