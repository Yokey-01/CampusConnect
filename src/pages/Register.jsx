// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Ensure this CSS file exists and is correctly linked

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // const validationErrors = validate();
    // if (Object.keys(validationErrors).length === 0) {
    //   // Proceed with form submission (e.g., API call)
    //   console.log('Form submitted:', formData);
      // Redirect to login page after successful registration
      navigate('/login');
    // } else {
    //   setErrors(validationErrors);
    // }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h2>Join CampusConnect</h2>
        <p>Connect, collaborate, and innovate with your campus community.</p>
      </div>
      <div className="register-right">
        <form className="register-form" onSubmit={handleSubmit}>
          <h3>Create Your Account</h3>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>
          {/* <div className="form-group checkbox">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeToTerms">I agree to the terms and conditions</label>
            {errors.agreeToTerms && <span className="error">{errors.agreeToTerms}</span>}
          </div> */}
          <button type="submit" className="btn primary" onClick={handleSubmit}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
