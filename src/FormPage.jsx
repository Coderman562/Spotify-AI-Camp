import React, { useState } from 'react';
import './index.css';

function FormPage() {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '', // Optional field
    lastName: '',
    hoursVolunteered: '',
    date: '',
    phoneNumber: '', // Optional field
    email: '',
    address: '', //Optional field
    notes: '', // Optional field
  });

  // Handle changes to form input values
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      console.log(data);
      
      // Do something with the response (e.g. display a success message)
    } catch (error) {
      console.error(error);
      
      // Do something with the error (e.g. display an error message)
    }
  };

  // Validate phone number input value
  function validatePhoneNumber(value) {
    const regex = /^\d{10}$/; // Only accepts 10-digit phone numbers
    return regex.test(value);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
              {/* // First Name input */}
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* Middle Name input */}
        <div className="form-group">
          <label htmlFor="middleName" className="form-label">
            Middle Name (optional)
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* // Last Name input */}
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* // Hours Volunteered input */}
        <div className="form-group">
          <label htmlFor="hoursVolunteered" className="form-label">
            Hours Volunteered
          </label>
          <input
            type="number"
            id="hoursVolunteered"
            name="hoursVolunteered"
            value={formData.hoursVolunteered}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        {/* // Date input */}
        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>


        {/* Phone Number input */}
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number (optional)
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Display format
            title="Phone number must be in the format XXX-XXX-XXXX"
            required={false} // Optional field
            onBlur={(e) => {
              // Validate phone number input value onBlur
              if (e.target.value && !validatePhoneNumber(e.target.value)) {
                alert('Please enter a valid phone number');
              }
            }}
          />
        </div>

        {/* Email input */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email (optional)
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

      {/* Address input */}
      <div className="form-group">
        <label htmlFor="address" className="form-label">
          Address (optional)
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


      {/* Notes input */}
      <div className="form-group">
        <label htmlFor="notes" className="form-label">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      {/* Submit button */}
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  </div>
  );
}

export default FormPage;