// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Ensure this CSS file exists and is correctly linked
// import Header from '../components/StuHeader';
import Footer from '../components/Footer';
import FacHeader from '../components/FacHeader';

const FacHome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className="home-container">
      <FacHeader/> 
      <header className="home-hero">
        <h1>Welcome to CampusConnect</h1>
        <p>Your gateway to campus collaboration and innovation.</p>
        <div className="home-actions">
          {/* <button onClick={handleGetStarted} className="btn primary">Get Started</button> */}
          {/* <button onClick={() => navigate('/login')} className="btn secondary">Login</button> */}
        </div>
      </header>

      <section className="home-features">
        <div className="feature-card" onClick={() => navigate('/community')}>
          <h3>Community</h3>
          <p>Connect with peers and faculty across departments.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/events')}>
          <h3>Events</h3>
          <p>Stay updated with campus events and workshops.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/resources')}>
          <h3>Resources</h3>
          <p>Access study materials and collaborative tools.</p>
        </div>
      </section><Footer/>

    </div>

  );
};

export default FacHome;
