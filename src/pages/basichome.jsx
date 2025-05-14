import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import BasicHeader from '../components/bsicheder';
import Footer from '../components/Footer';

const BasicHome = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <BasicHeader />

      <header className="home-hero">
        <h1>Welcome to CampusConnect</h1>
        <p>Your gateway to campus collaboration and innovation.</p>
        <div className="home-actions">
          {/* <button onClick={() => navigate('/register')} className="btn primary">Get Started</button> */}
          {/* <button onClick={() => navigate('/login')} className="btn secondary">Login</button> */}
        </div>
      </header>

      <section className="home-features">
        <div className="feature-card" onClick={() => navigate('/community')}>
          <h3>Community</h3>
          <p>Join discussions, ask questions, and share knowledge with peers and faculty.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/events')}>
          <h3>Events</h3>
          <p>Discover upcoming workshops, seminars, and student activities.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/resources')}>
          <h3>Resources</h3>
          <p>Find notes, assignments, and important academic documents.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BasicHome;
