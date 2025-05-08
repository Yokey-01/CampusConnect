import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequestForm = () => {
  const navigate = useNavigate();

  const [request, setRequest] = useState({
    type: '',
    description: '',
    file: null,
    priority: '',
    dateNeeded: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setRequest((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Request:', request);
    navigate('/dashboard');
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom right, #6b73ff,rgb(28, 37, 209))',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
        minHeight: '100vh',
        padding: '3rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '650px',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '16px',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
          padding: '2.5rem',
          backdropFilter: 'blur(12px)',
          animation: 'fadeIn 1.5s ease-out',
        }}
      >
        <h2
          style={{
            color: '#1e3a8a',
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '1.8rem',
            textAlign: 'center',
          }}
        >
        Request Form
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Request Type */}
          <label style={labelStyle}>Request Type</label>
          <select
            name="type"
            value={request.type}
            required
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">-- Select Type --</option>
            <option value="certificate">Certificate</option>
            <option value="leave">Leave</option>
            <option value="bonafide">Bonafide</option>
            <option value="other">Other</option>
          </select>

          {/* Date Needed */}
          <label style={labelStyle}>Date</label>
          <input
            type="date"
            name="dateNeeded"
            value={request.dateNeeded}
            required
            onChange={handleChange}
            style={inputStyle}
          />

          {/* Description */}
          <label style={labelStyle}>Description</label>
          <textarea
            name="description"
            rows={5}
            placeholder="Describe your request clearly..."
            required
            onChange={handleChange}
            style={{ ...inputStyle, resize: 'vertical' }}
          />

          {/* File Upload */}
          <label style={labelStyle}>Upload File (optional)</label>
          <input
            type="file"
            onChange={handleFileChange}
            style={{
              marginBottom: '1.5rem',
              fontSize: '0.95rem',
              color: '#334155',
            }}
          />


          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(37,99,235,0.3)',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2563eb')}
            onClick={(e) => (e.target.style.transform = 'scale(1.05)')}
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

// Common styling for label and inputs
const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  marginTop: '1rem',
  fontWeight: '600',
  color: '#1e3a8a',
};

const inputStyle = {
  width: '100%',
  padding: '0.7rem',
  borderRadius: '8px',
  border: '1px solid #cbd5e1',
  fontSize: '1rem',
  marginBottom: '0.5rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};

export default RequestForm;
