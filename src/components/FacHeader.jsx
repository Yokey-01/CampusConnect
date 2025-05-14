
import React from 'react';
import { Link} from 'react-router-dom';
import '../theme.css';

const FacHeader = () => {
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
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default FacHeader;





import { useLocation } from 'react-router-dom';

const FacdashHeader = () => {
  const location = useLocation();

  return (
    <header
      
    >
      {/* Logo / Title */}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        CampusConnect
      </h2>

      {/* Navigation Links */}
      <nav>
        
          <li>
            <Link
              to="/fachome"
              style={{
                color: location.pathname === '/fachome' ? '#93c5fd' : 'white',
                textDecoration: 'none',
                borderBottom: location.pathname === '/fachome' ? '2px solid #93c5fd' : 'none',
                paddingBottom: '2px',
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/fac-profile"
              style={{
                color: location.pathname === '/fac-profile' ? '#93c5fd' : 'white',
                textDecoration: 'none',
                borderBottom: location.pathname === '/fac-profile' ? '2px solid #93c5fd' : 'none',
                paddingBottom: '2px',
              }}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{
                color: location.pathname === '/' ? '#93c5fd' : 'white',
                textDecoration: 'none',
                borderBottom: location.pathname === '/' ? '2px solid #93c5fd' : 'none',
                paddingBottom: '2px',
              }}
            >
              Logout
            </Link>
          </li>
        
      </nav>
    </header>
  );
};

export { FacdashHeader };

