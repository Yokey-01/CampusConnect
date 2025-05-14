import React from 'react';
import { Link } from 'react-router-dom';

const StuHeader = () => (
  <header style={{
    padding: '1rem',
    backgroundColor: '#2a2d43',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  }}>
    <h1>Campus Connect</h1>
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/stuhome" style={{ color: 'white',  textDecoration:'none' }}>Home</Link>
      {/* <Link to="/login" style={{ color: 'white',  textDecoration:'none' }}>Login</Link> */}
      {/* <Link to="/register" style={{ color: 'white',  textDecoration:'none' }}>Signup</Link> */}
      <Link to="/stu-profile" style={{ color: 'white',  textDecoration:'none' }}>My Profile</Link>
      <Link to="/dashboard" style={{ color: 'white',  textDecoration:'none' }}>Dashboard</Link>
      {/* <Link to="/facdashboard" style={{ color: 'white',  textDecoration:'none' }}>Fac Dashboard</Link> */}
    </nav>
  </header>
);

export default StuHeader;
