import React, { useState } from 'react';
import './index.css';

function FormPage() {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    hoursVolunteered: '',
    date: '',
    phoneNumber: '',
    email: '',
    address: '',
    notes: '',
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
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // Send data to server
  }

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