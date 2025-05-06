import React, { useState, useEffect } from 'react';
import './FacultyDashboard.css';
import { useNavigate } from 'react-router-dom';

const FacultyDashboard = () => {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState('');
  const [requests, setRequests] = useState([]);
  const [reports, setReports] = useState({ totalRequests: 0, activeUsers: 0 });
  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [newCourse, setNewCourse] = useState({ name: '', description: '' });

  useEffect(() => {
    fetch('/api/faculty/announcements').then(res => res.json()).then(setAnnouncements);
    fetch('/api/faculty/requests').then(res => res.json()).then(setRequests);
    fetch('/api/faculty/courses').then(res => res.json()).then(setCourses);
    fetch('/api/faculty/reports').then(res => res.json()).then(setReports);
  }, []);

  const handlePostAnnouncement = () => {
    if (announcementText.trim()) {
      fetch('/api/faculty/announcement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: announcementText })
      })
        .then(res => res.json())
        .then(data => {
          setAnnouncements([...announcements, data]);
          setAnnouncementText('');
        });
    }
  };

  const updateRequestStatus = (id, status) => {
    fetch(`/api/faculty/requests/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    }).then(() => {
      setRequests(requests.map(req => req.id === id ? { ...req, status } : req));
    });
  };

  const handleAddCourse = () => {
    if (newCourse.name && newCourse.description) {
      fetch('/api/faculty/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCourse)
      })
        .then(res => res.json())
        .then(course => {
          setCourses([...courses, course]);
          setShowAddCourse(false);
          setNewCourse({ name: '', description: '' });
        });
    }
  };

  const handleDeleteCourse = (id) => {
    fetch(`/api/faculty/courses/${id}`, { method: 'DELETE' }).then(() => {
      setCourses(courses.filter(course => course.id !== id));
    });
  };

  const handleUpdateCourse = (id) => {
    fetch(`/api/faculty/courses/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editingName })
    }).then(() => {
      setCourses(courses.map(course => course.id === id ? { ...course, name: editingName } : course));
      setEditingId(null);
      setEditingName('');
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('facultyToken');
    navigate('/');
  };

  return (
    <div className="faculty-dashboard blue-theme">
      <header className="dashboard-header">
        <h1>Faculty Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <section className="section announcements">
        <h2>Post Announcements</h2>
        <textarea
          value={announcementText}
          onChange={(e) => setAnnouncementText(e.target.value)}
          placeholder="Write your announcement..."
        />
        <button onClick={handlePostAnnouncement}>Post</button>
        <ul className="announcement-list">
          {announcements.map((a, index) => (
            <li key={index}><strong>{a.date}:</strong> {a.text}</li>
          ))}
        </ul>
      </section>

      <section className="section requests">
        <h2>Student Requests</h2>
        {requests.map(req => (
          <div key={req.id} className="request-card">
            <p><strong>{req.name}</strong>: {req.request}</p>
            <p>Status: <span className={`status ${req.status}`}>{req.status}</span></p>
            {req.status === 'pending' && (
              <div className="request-actions">
                <button className="approve" onClick={() => updateRequestStatus(req.id, 'approved')}>Approve</button>
                <button className="reject" onClick={() => updateRequestStatus(req.id, 'rejected')}>Reject</button>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="section reports">
        <h2>Reports</h2>
        <p>Total Requests: <strong>{reports.totalRequests}</strong></p>
        <p>Active Users: <strong>{reports.activeUsers}</strong></p>
      </section>

      <section className="section courses">
        <h2>Manage Courses</h2>
        <button
          className="toggle-add"
          onClick={() => setShowAddCourse(!showAddCourse)}
        >
          {showAddCourse ? 'Cancel' : 'Add Course'}
        </button>

        {showAddCourse && (
          <div className="add-course-form">
            <input
              type="text"
              placeholder="Course Name"
              value={newCourse.name}
              onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
            />
            <textarea
              placeholder="Course Description"
              value={newCourse.description}
              onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
            />
            <button onClick={handleAddCourse}>Add Course</button>
          </div>
        )}

        <ul className="course-list">
          {courses.map(course => (
            <li key={course.id} className="course-item">
              {editingId === course.id ? (
                <>
                  <input
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                  />
                  <button className="save" onClick={() => handleUpdateCourse(course.id)}>Save</button>
                </>
              ) : (
                <>
                  {course.name}
                  <button className="edit" onClick={() => {
                    setEditingId(course.id);
                    setEditingName(course.name);
                  }}>Edit</button>
                </>
              )}
              <button className="delete" onClick={() => handleDeleteCourse(course.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FacultyDashboard;
