
import React from 'react';
import { Link } from 'react-router-dom';
import '../theme.css';

const FacHeader = () => (
  <header style={{
    padding: '1rem 2rem',
    backgroundColor: 'var(--header-bg)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'var(--header-text)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  }}>
    <h1 style={{ margin: 0 }}>Campus Connect</h1>
    <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      <Link to="/fachome" style={{ 
        color: 'var(--header-text)',  
        textDecoration:'none',
        fontWeight: 500,
        fontSize: '0.95rem'
      }}>Home</Link>
      <Link to="/fac-profile" style={{ 
        color: 'var(--header-text)',  
        textDecoration: 'none',
        fontWeight: 500,
        fontSize: '0.95rem'
      }}>My Profile</Link>
      <Link to="/facdashboard" style={{ 
        color: 'var(--header-text)',  
        textDecoration: 'none',
        fontWeight: 500,
        fontSize: '0.95rem'
      }}>Dashboard</Link>
    </nav>
  </header>
);

export default FacHeader;



const FacdashHeader = () => {
  const location = useLocation();

  return (
    <header className="faculty-dashboard-header">
      <div className="header-content">
        <h1 className="header-logo">Campus Connect</h1>
        <nav className="header-nav">
          <Link 
            to="/fachome" 
            className={`nav-link ${location.pathname === '/fachome' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/fac-profile" 
            className={`nav-link ${location.pathname === '/fac-profile' ? 'active' : ''}`}
          >
            My Profile
          </Link>
          <Link 
            to="/facdashboard" 
            className={`nav-link ${location.pathname === '/facdashboard' ? 'active' : ''}`}
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export { FacdashHeader };