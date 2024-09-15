// src/components/CustomForm.jsx

import React, { useState } from 'react';
import './CustomForm.css'; // Import the CSS file

const CustomForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data (optional)
    console.log('Form Data:', formData);

    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      password: '',
    });

    // Show the success message
    setIsSubmitted(true);
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Hide the success message when the user starts typing
    setIsSubmitted(false);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <h2>Custom Form</h2>
      {isSubmitted && (
        <p className="success-message">Form submitted successfully!</p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomForm;
