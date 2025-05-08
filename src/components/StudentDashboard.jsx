import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnnouncementBoard from './AnnouncementBoard';
import RequestsList from './RequestsList';

const StudentDashboard = () => {
  const student = {
    name: 'Yokeyntrra S',
    rollNumber: '717821i261',
    department: 'AD',
    year: '4th Year',
  };

  const [enrolledCourses, setEnrolledCourses] = useState([
    { code: 'CS301', name: 'Data Structures' },
    { code: 'CS305', name: 'Web Technologies' },
    { code: 'CS310', name: 'Operating Systems' },
    { code: 'CS315', name: 'Machine Learning' },
  ]);

  const [unenrolledCourses, setUnenrolledCourses] = useState([
    { code: 'CS322', name: 'Cloud Computing' },
    { code: 'CS325', name: 'Advanced Java' },
  ]);

  const handleEnroll = (course) => {
    setEnrolledCourses(prev => [...prev, course]);
    setUnenrolledCourses(prev => prev.filter(c => c.code !== course.code));
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f9ff', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        {/* Header Section */}
        <div
          style={{
            background: 'linear-gradient(to right, #2563eb, #1e3a8a)',
            borderRadius: '12px',
            padding: '2rem',
            color: '#ffffff',
            marginBottom: '2rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          }}
        >
          <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Welcome, {student.name}</h1>
          <p>{student.department} • {student.year} • {student.rollNumber}</p>
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Announcements */}
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              border: '1px solid #e0e7ff',
            }}
          >
            <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Latest Announcements</h3>
            <div style={{ maxHeight: '250px', overflowY: 'auto', paddingRight: '0.5rem' }}>
              <AnnouncementBoard />
            </div>
          </div>

          {/* Requests */}
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              border: '1px solid #e0e7ff',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: '#1e3a8a' }}>Your Requests</h3>
              <Link to="/new-request">
                <button
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  New Request
                </button>
              </Link>
            </div>
            <div style={{ marginTop: '1rem', maxHeight: '250px', overflowY: 'auto', paddingRight: '0.5rem' }}>
              <RequestsList />
            </div>
          </div>

          {/* Courses Section */}
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              border: '1px solid #e0e7ff',
              gridColumn: 'span 2',
            }}
          >
            <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Courses Enrolled</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {enrolledCourses.map(course => (
                <li
                  key={course.code}
                  style={{
                    padding: '0.8rem 1rem',
                    marginBottom: '0.5rem',
                    background: '#f8fafc',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#0f172a',
                    fontWeight: 500,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  <span>{course.name}</span>
                  <span style={{ fontWeight: 600, color: '#2563eb' }}>{course.code}</span>
                </li>
              ))}
            </ul>

            {/* Unenrolled Courses */}
{unenrolledCourses.length > 0 && (
  <>
    <h4 style={{ marginTop: '2rem', color: '#475569' }}>Courses to Enroll</h4>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {unenrolledCourses.map(course => (
        <li
          key={course.code}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#f0f9ff',
            padding: '0.9rem 1rem',
            marginBottom: '0.75rem',
            borderRadius: '8px',
            fontSize: '1rem',
            border: '1px solid #bae6fd',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            color: '#0c4a6e',
            fontWeight: 500,
          }}
        >
          <div>
            <strong style={{ color: '#0369a1' }}>{course.name}</strong>
            <div style={{ fontSize: '0.85rem', color: '#475569' }}>{course.code}</div>
          </div>
          <button
            onClick={() => handleEnroll(course)}
            style={{
              backgroundColor: '#0ea5e9',
              color: 'white',
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Enroll
          </button>
        </li>
      ))}
    </ul>
  </>
)}

            {/* Request Study Resources */}
            <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
              <Link to="/request-resources">
                <button
                  style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                  }}
                >
                  Request Study Resources
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
