import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => navigate('/');
  const handleBack = () => navigate(-1); // Go to previous page

  return (
    <div style={{ background: '#f1f5f9', minHeight: '100vh', padding: '2rem' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: '#ffffff',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 6px 16px rgba(0,0,0,0.05)',
          fontFamily: 'Segoe UI, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <button
            onClick={handleBack}
            style={{
              backgroundColor: '#e2e8f0',
              color: '#1e3a8a',
              border: 'none',
              borderRadius: '6px',
              padding: '0.5rem 1rem',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            ⬅ Back
          </button>

          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#ef4444',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '0.5rem 1rem',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>

        <h1 style={{ fontSize: '1.8rem', color: '#1e3a8a', marginBottom: '1rem' }}>Admin Dashboard</h1>
        <p style={{ color: '#475569', marginBottom: '2rem' }}>
          Welcome, Admin! Use the controls below to manage the platform.
        </p>

        {/* Main Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
          {[
            { label: 'Manage Users', path: '/admin/usermanagement', color: '#3b82f6' },
            { label: 'View Requests', path: '/admin/viewrequest', color: '#10b981' },
            { label: 'Announcements', path: '/admin/announcements', color: '#6366f1' },
            { label: 'Course Management', path: '/admin/coursemanagement', color: '#f97316' },
            { label: 'Dashboard Analytics', path: '/admin/dashboard', color: '#14b8a6' },
            { label: 'Logout', path: '/', color: '#ef4444' },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              style={{
                backgroundColor: item.color,
                color: '#ffffff',
                padding: '1rem',
                borderRadius: '10px',
                fontWeight: '600',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
