import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BasicHeader = () => {
  const location = useLocation();

  return (
    <>
      <style>{`
        .dashboard-nav .nav-link:hover,
        .dashboard-nav .nav-link.active {
          color: rgb(28, 29, 30);
          border-bottom: 2px solid #1e3a8a;
        }
      `}</style>

      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '1rem',
        backgroundColor: '#2a2d43',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        boxShadow: '0 2px 5px rgba(208, 200, 200, 0.1)'
      }}>
        <h1>Campus Connect</h1>
        <nav className="dashboard-nav" style={{ display: 'flex', gap: '1rem' }}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            style={{ color: 'white', textDecoration: 'none' }}
          >Home</Link>
          {/* <Link
            to="/admin"
            className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`}
            style={{ color: 'white', textDecoration: 'none' }}
          >Admin</Link> */}
          <Link
            to="/login"
            className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
            style={{ color: 'white', textDecoration: 'none' }}
          >Login</Link>
          <Link
            to="/register"
            className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`}
            style={{ color: 'white', textDecoration: 'none' }}
          >Signup</Link>
        </nav>
      </header>
    </>
  );
};

export default BasicHeader;
