import React from 'react';
import { Link } from 'react-router-dom';

const BasicHeader = () => (
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
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  }}>
    <h1>Campus Connect</h1>
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>Admin</Link>
      <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
      <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Signup</Link>
    </nav>
  </header>
);

export default BasicHeader;
