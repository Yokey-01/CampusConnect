import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequestResources = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    courseCode: '',
    resourceType: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Resource request submitted:', form);
    alert('Resource request submitted successfully!');
    navigate('/dashboard');
  };

  return (
    <div
      style={{
        padding: '2rem',
        background: 'linear-gradient(45deg, #6b73ff,rgb(49, 56, 175))',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
        minHeight: '50vh',
        fontFamily: 'Segoe UI, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '650px',
          width: '100%',
          background: '#fff',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
          backdropFilter: 'blur(12px)',
          animation: 'fadeIn 1.5s ease-out',
        }}
      >
        <h2
          style={{
            marginBottom: '1.5rem',
            color: '#1e3a8a',
            fontSize: '1.8rem',
            textAlign: 'center',
          }}
        >
        Request Study Resources
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Course Code */}
          <label style={labelStyle}>Course Code</label>
          <input
            type="text"
            name="courseCode"
            value={form.courseCode}
            onChange={handleChange}
            placeholder="e.g., CS305"
            required
            style={inputStyle}
          />

          {/* Resource Type */}
          <label style={labelStyle}>Resource Type</label>
          <select
            name="resourceType"
            value={form.resourceType}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select a type</option>
            <option value="notes">Lecture Notes</option>
            <option value="books">Reference Books</option>
            <option value="videos">Video Tutorials</option>
            <option value="others">Others</option>
          </select>

          {/* Description */}
          <label style={labelStyle}>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe what you need..."
            rows={5}
            required
            style={{ ...inputStyle, resize: 'vertical' }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              marginTop: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2563eb')}
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '0.75rem',
  margin: '0.5rem 0 1rem',
  border: '1px solid #cbd5e1',
  borderRadius: '8px',
  fontSize: '1rem',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  marginTop: '1rem',
  fontWeight: '600',
  color: '#1e3a8a',
};

// CSS animation for background
const style = document.createElement('style');
style.innerHTML = `
  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
document.head.appendChild(style);

export default RequestResources;
