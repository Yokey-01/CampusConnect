import React from 'react';
import { Link } from 'react-router-dom';

const BasicHeader = () => (
  <header style={{
    padding: '1rem',
    backgroundColor: '#2a2d43',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  }}>
    <h1>Campus Connect</h1>
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/" style={{ color: 'white',  textDecoration:'none' }}>Home</Link>
      <Link to="/admin" style={{ color: 'white',  textDecoration:'none' }}>Admin</Link>
      <Link to="/login" style={{ color: 'white',  textDecoration:'none' }}>Login</Link>
      <Link to="/register" style={{ color: 'white',  textDecoration:'none' }}>Signup</Link>
      

      {/* <Link to="/facdashboard" style={{ color: 'white',  textDecoration:'none' }}>Fac Dashboard</Link> */}
    </nav>
  </header>
);

export default BasicHeader;
