// NotesInput.jsx
import React from 'react';
import "../index.css";

function NotesInput({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="notes" className="form-label">
        Notes (optional)
      </label>
      <textarea
        id="notes"
        name="notes"
        value={value}
        onChange={onChange}
        className="form-input"
        placeholder="Notes"
      />
    </div>
  );
}

export default NotesInput;
