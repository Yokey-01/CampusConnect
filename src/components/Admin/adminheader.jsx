import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '1rem 2rem',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>
          {/* CampusConnect - Admin */}
        </h1>
        <nav style={{ display: 'flex', gap: '1.5rem', fontWeight: 500 }}>
          <Link
            to="/admin"
            style={{ textDecoration: 'none', color: '#1e40af' }} // Indigo-800
          >
            Home
          </Link>
          <Link
            to="/admin/dashboard"
            style={{ textDecoration: 'none', color: '#1e40af' }}
          >
            Dashboard
          </Link>
          <Link
            to="/"
            style={{ textDecoration: 'none', color: '#dc2626' }} // Red-600
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
