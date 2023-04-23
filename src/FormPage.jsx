import React, { useState } from 'react';
import './index.css';

function FormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    hoursVolunteered: '',
    date: '',
    phoneNumber: '',
    email: '',
    address: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // Send data to server
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        {/* Other form groups */}
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;
