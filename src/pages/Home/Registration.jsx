import React, { useState } from 'react';
import './Registration.css'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: '',
    year: '',
    track: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to a backend or log it here
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h2>Track Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <label htmlFor="fullName">Full Name:</label>
        <input 
          type="text" 
          id="fullName" 
          name="fullName" 
          value={formData.fullName} 
          onChange={handleChange} 
          required 
        /><br/><br/>

        {/* Email */}
        <label htmlFor="email">Email Address:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        /><br/><br/>

        {/* Course of Study */}
        <label htmlFor="course">Current Course of Study:</label>
        <input 
          type="text" 
          id="course" 
          name="course" 
          value={formData.course} 
          onChange={handleChange} 
          required 
        /><br/><br/>

        {/* Year of Study */}
        <label htmlFor="year">Year of Study:</label>
        <input 
          type="number" 
          id="year" 
          name="year" 
          min="1" 
          max="5" 
          value={formData.year} 
          onChange={handleChange} 
          required 
        /><br/><br/>

        {/* Track Selection */}
        <label htmlFor="track">Select Preferred Track:</label>
        <select 
          id="track" 
          name="track" 
          value={formData.track} 
          onChange={handleChange} 
          required
        >
          <option value="" disabled>Select your track</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="Data Science">Data Science</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select><br/><br/>

        {/* Submit Button */}
        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
