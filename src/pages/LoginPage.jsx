// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure your custom CSS is here

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [domainError, setDomainError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setDomainError(''); // Clear domain error on input change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const email = formData.email.toLowerCase();

      if (email.endsWith('@gmail.com')) {
        navigate('/stuhome');
      } else if (email.endsWith('@kce.ac.in')) {
        navigate('/fachome');
      } else {
        setDomainError('Only @gmail.com (student) or @kce.ac.in (faculty) emails are allowed.');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Welcome Back!</h2>
        <p>Enter your credentials to access your account.</p>
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          {domainError && <p className="error">{domainError}</p>}

          <button type="submit" className="btn primary">Login</button>

          <p className="register-link">
            Don't have an account? <span onClick={() => navigate('/register')}>Register here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
