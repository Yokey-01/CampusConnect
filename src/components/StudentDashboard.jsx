import React from 'react';
import AnnouncementBoard from './AnnouncementBoard';
import RequestsList from './RequestsList';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f9ff', minHeight: '100vh' }}>
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          padding: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ color: '#1e3a8a', marginBottom: '2rem' }}>🎓 Welcome to Your Dashboard</h2>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Announcements Section */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: '#2563eb', marginBottom: '1rem' }}>📢 Latest Announcements</h3>
            <div
              style={{
                backgroundColor: '#eff6ff',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #c7d2fe',
              }}
            >
              <AnnouncementBoard />
            </div>
          </div>

          {/* Requests Section */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: '#2563eb', marginBottom: '1rem' }}>📝 Your Requests</h3>
            <div
              style={{
                backgroundColor: '#eff6ff',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #c7d2fe',
              }}
            >
              <RequestsList />
              <Link to="/new-request">
                <button
                  style={{
                    marginTop: '1rem',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  New Request
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
