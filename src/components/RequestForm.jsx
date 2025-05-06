import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequestForm = () => {
  const navigate = useNavigate();

  const [request, setRequest] = useState({
    type: '',
    description: '',
    file: null,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setRequest(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    setRequest(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) =>
      formData.append(key, value)
    );

    console.log('Submitted Request:', request);

    // Navigate to dashboard after submission
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f0f6ff', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>📝 Submit a New Request</h2>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#2563eb' }}>
            Request Type
          </label>
          <select
            name="type"
            required
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.6rem',
              borderRadius: '6px',
              border: '1px solid #c7d2fe',
              marginBottom: '1rem',
            }}
          >
            <option value="">-- Select Request Type --</option>
            <option value="certificate">Certificate</option>
            <option value="leave">Leave</option>
          </select>

          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#2563eb' }}>
            Description
          </label>
          <textarea
            name="description"
            placeholder="Describe your request"
            required
            onChange={handleChange}
            rows={5}
            style={{
              width: '100%',
              padding: '0.6rem',
              borderRadius: '6px',
              border: '1px solid #c7d2fe',
              marginBottom: '1rem',
            }}
          />

          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#2563eb' }}>
            Upload Supporting File (optional)
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ marginBottom: '1.5rem' }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              width: '100%',
            }}
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
