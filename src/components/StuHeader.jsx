import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../theme.css';

const StuHeader = () => {
  const location = useLocation();

  return (
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
      <nav className="dashboard-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/stuhome" className={`nav-link ${location.pathname === '/stuhome' ? 'active' : ''}`}>Home</Link>
        <Link to="/stu-profile" className={`nav-link ${location.pathname === '/stu-profile' ? 'active' : ''}`}>My Profile</Link>
        <Link to="/dashboard" className={`nav-link ${location.pathname === '/studentdashboard' ? 'active' : ''}`}>Dashboard</Link>
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Logout</Link>
      </nav>
    </header>
  );
};

export default StuHeader;



const StudashHeader = () => {
  const location = useLocation();

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    paddingBottom: '2px',
    transition: 'color 0.3s, borderBottom 0.3s',
  };

  const hoverStyle = {
    color: '#171833',
  };

  const activeStyle = {
    color: '#181718',
    fontWeight: 'bold',
  };

  const navItems = [
    { path: '/stuhome', label: 'Home' },
    { path: '/stu-profile', label: 'Profile' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/', label: 'Logout' },
  ];

  return (
    <header
      style={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        padding: '1rem 2rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>CampusConnect</h2>

      <nav>
        <ul
          style={{
            display: 'flex',
            gap: '1.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            fontSize: '1rem',
            fontWeight: 500,
          }}
        >
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                style={
                  location.pathname === path
                    ? { ...linkStyle, ...activeStyle }
                    : linkStyle
                }
                onMouseEnter={(e) => {
                  if (location.pathname !== path)
                    Object.assign(e.target.style, hoverStyle);
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== path)
                    Object.assign(e.target.style, linkStyle);
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export { StudashHeader };
