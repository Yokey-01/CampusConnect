import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import BasicHeader from '../components/bsicheder';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Add this for icons

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      navigate('/login');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <BasicHeader />
      <div className="register-container">
        <div className="register-left">
          <h2>Join CampusConnect</h2>
          <p>Connect, collaborate, and innovate with your campus community.</p>
          <ul>
            <li>Stay updated with campus announcements</li>
            <li>Access study resources easily</li>
            <li>Engage with faculty and peers</li>
            <li>Track your academic progress</li>
          </ul>
          <blockquote>
            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
          </blockquote>
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

            <div className="form-group password-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="toggle-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="form-group password-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span
                  className="toggle-visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="role">Select Role</label>
              <select id="role" name="role" value={formData.role} onChange={handleChange}>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
              </select>
            </div>

            {/* <div className="checkbox-group">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              /> */}
              {/* <label htmlFor="agreeToTerms">I agree to the terms and conditions</label> */}
            {/* </div> */}
            {errors.agreeToTerms && <span className="error">{errors.agreeToTerms}</span>}

            <button type="submit" className="btn primary">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
