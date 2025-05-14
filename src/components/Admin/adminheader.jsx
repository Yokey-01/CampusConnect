import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => navigate(-1);

  const linkStyle = {
    textDecoration: 'none',
    color: '#1e40af',
    paddingBottom: '2px',
    transition: 'color 0.3s, border-bottom 0.3s',
  };

  const activeStyle = {
    color: '#1e3a8a',
    borderBottom: '2px solidrgb(12, 70, 230)',
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '1rem 2rem',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      {/* Left: Back Button */}
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

      {/* Right: Navigation */}
      <nav style={{ display: 'flex', gap: '1.5rem', fontWeight: 500 }}>
        <Link
          to="/admin"
          style={{
            ...linkStyle,
            ...(location.pathname === '/admin' ? activeStyle : {}),
          }}
          onMouseOver={(e) => (e.target.style.color = '#171849')}
          onMouseOut={(e) => (e.target.style.color = location.pathname === '/admin' ? '#1e3a8a' : '#1e40af')}
        >
          Home
        </Link>
        <Link
          to="/admin/dashboard"
          style={{
            ...linkStyle,
            ...(location.pathname === '/admin/dashboard' ? activeStyle : {}),
          }}
          onMouseOver={(e) => (e.target.style.color = '#171849')}
          onMouseOut={(e) => (e.target.style.color = location.pathname === '/admin/dashboard' ? '#1e3a8a' : '#1e40af')}
        >
          Dashboard
        </Link>
        <Link
          to="/"
          style={{
            ...linkStyle,
            color: '#1e3a8a',
          }}
          onMouseOver={(e) => (e.target.style.color = '#dc2626')}
          onMouseOut={(e) => (e.target.style.color = '#1e3a8a')}
        >
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default AdminHeader;
