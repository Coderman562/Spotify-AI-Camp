import React, { useState } from 'react';
import './FormPage.css';
import FirstNameInput from './FormPageComponents/FirstNameInput';
import MiddleNameInput from './FormPageComponents/MiddleNameInput';
import LastNameInput from './FormPageComponents/LastNameInput';
import HoursVolunteeredInput from './FormPageComponents/HoursVolunteeredInput';
import DateInput from './FormPageComponents/DateInput';
import PhoneNumberInput from './FormPageComponents/PhoneNumberInput';
import EmailInput from './FormPageComponents/EmailInput';
import AddressInput from './FormPageComponents/AddressInput';
import NotesInput from './FormPageComponents/NotesInput';

function FormPage() {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
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

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <FirstNameInput
          value={formData.firstName}
          onChange={handleChange}
        />
        <MiddleNameInput
          value={formData.middleName}
          onChange={handleChange}
        />
        <LastNameInput
          value={formData.lastName}
          onChange={handleChange}
        />
        <HoursVolunteeredInput
          value={formData.hoursVolunteered}
          onChange={handleChange}
        />
        <DateInput
          value={formData.date}
          onChange={handleChange}
        />
        <PhoneNumberInput
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <EmailInput
          value={formData.email}
          onChange={handleChange}
        />
        <AddressInput
          value={formData.address}
          onChange={handleChange}
        />
        <NotesInput
          value={formData.notes}
          onChange={handleChange}
        />

        {/* Submit button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;
