import React, { useState, useEffect } from 'react';
import './FacultyDashboard.css';
import {
  PieChart, Pie, Cell,
  BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend,
  LabelList
} from 'recharts';
import { FacdashHeader } from './FacHeader';

const FacultyDashboard = () => {
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
    const sampleAnnouncements = [
      { date: '2025-05-01', text: 'Exam schedule released.' },
      { date: '2025-04-28', text: 'Workshop on AI this Friday.' }
    ];
    const sampleRequests = [
      { id: 1, name: 'Alice', request: 'Leave for 3 days', status: 'pending', date: '2025-05-06' },
      { id: 2, name: 'Bob', request: 'Course extension', status: 'approved', date: '2025-05-05' },
      { id: 3, name: 'Charlie', request: 'Assignment recheck', status: 'rejected', date: '2025-05-04' }
    ];
    const sampleCourses = [
      { id: 1, name: 'Math 101', description: 'Basic Mathematics' },
      { id: 2, name: 'CS 102', description: 'Intro to Programming' },
      { id: 3, name: 'AD 104', description: 'Machine Learning' },
      { id: 4, name: 'AD 104', description: 'Deep Learning' },
      { id: 5, name: 'History 103', description: 'World History' }
    ];
    const sampleReports = {
      totalRequests: sampleRequests.length,
      activeUsers: 12
    };

    setAnnouncements(sampleAnnouncements);
    setRequests(sampleRequests);
    setCourses(sampleCourses);
    setReports(sampleReports);
  }, []);

  const requestStatusData = ['pending', 'approved', 'rejected'].map(status => ({
    name: status,
    value: requests.filter(req => req.status === status).length
  }));

  const courseBarData = courses.reduce((acc, course) => {
    const key = course.name.toUpperCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const barData = Object.entries(courseBarData).map(([letter, count]) => ({
    name: letter,
    Courses: count
  }));

  const lineData = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const label = date.toISOString().split('T')[0];
    const count = requests.filter(r => new Date(r.date).toDateString() === date.toDateString()).length;
    return { date: label, Requests: count };
  }).reverse();

  const COLORS = ['#8884d8', '#82ca9d', '#FF8042'];

  const handlePostAnnouncement = () => {
    if (!announcementText.trim()) return alert('Announcement cannot be empty.');
    const newAnn = { date: new Date().toISOString().split('T')[0], text: announcementText };
    setAnnouncements([...announcements, newAnn]);
    setAnnouncementText('');
  };

  const updateRequestStatus = (id, status) => {
    setRequests(prev => prev.map(req => req.id === id ? { ...req, status } : req));
  };

  const handleAddCourse = () => {
    const { name, description } = newCourse;
    if (!name || !description) return alert('Please fill all fields.');
    const newEntry = { id: Date.now(), ...newCourse };
    setCourses([...courses, newEntry]);
    setNewCourse({ name: '', description: '' });
    setShowAddCourse(false);
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const handleUpdateCourse = (id) => {
    if (!editingName.trim()) return alert('Course name cannot be empty.');
    setCourses(courses.map(c => c.id === id ? { ...c, name: editingName } : c));
    setEditingId(null);
    setEditingName('');
  };

  return (
    <>
    
      <style>{`
        .dashboard-header {
          background-color:rgb(0, 0, 0);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 999;
          font-weight:bold;
        }

        .dashboard-header .logo {
          font-size: 1.5rem;
          color:rgb(216, 220, 231);
          font-weight: bold;
        }

        .dashboard-nav {
          display: flex;
          gap: 1.5rem;
        }

        .dashboard-nav .nav-link {
          text-decoration: none;
          color:rgb(230, 234, 240);
          font-weight: 500;
          padding-bottom: 4px;
          transition: color 0.3s, border-bottom 0.3s;
        }

        .dashboard-nav .nav-link:hover,
        .dashboard-nav .nav-link.active {
          color:rgb(47, 47, 48);
          font-weight:bold;
        }

        .faculty-dashboard {
          font-family: Arial, sans-serif;
          padding: 2rem;
        }

        .section {
          margin-bottom: 2rem;
        }

        textarea, input {
          width: 50%;
          margin-bottom: 1rem;
          padding: 0.5rem;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        button {
          padding: 0.5rem 1rem;
          margin-top: 0.5rem;
          // background-color: #1e3a8a;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #2742af;
        }

        // .request-card, .course-item {
        //   background: #f1f5f9;
        //   padding: 1rem;
        //   border-radius: 8px;
        //   margin-bottom: 1rem;
        // }

        .status {
          text-transform: capitalize;
          font-weight: bold;
        }

        // .status.pending { color: orange; }
        // .status.approved { color: green; }
        // .status.rejected { color: red; }

        .charts-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }

        .chart-card {
          // background: #ffffff;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
        }

        .course-item button {
          margin-left: 0.5rem;
        }

        .add-course-form input, .add-course-form textarea {
          margin-bottom: 0.5rem;
        }

        .toggle-add {
          margin-top: 0.5rem;
        }
      `}</style>

      <div className="faculty-dashboard blue-theme">
        <header className="dashboard-header">
          <h1 className="logo">Campus Connect</h1>
          <nav className="dashboard-nav">
            <a href="/fachome" className={`nav-link ${window.location.pathname === '/fachome' ? 'active' : ''}`}>Home</a>
            <a href="/fac-profile" className={`nav-link ${window.location.pathname === '/fac-profile' ? 'active' : ''}`}>My Profile</a>
            <a href="/facdasboard" className={`nav-link ${window.location.pathname === '/facdashboard' ? 'active' : ''}`}>Dashboard</a>
            <a href="/" className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`}>Logout</a>
          </nav>
        </header>

        {/* Announcements */}
        <section className="section announcements">
          <h2>Post Announcements</h2>
          <textarea
            value={announcementText}
            onChange={(e) => setAnnouncementText(e.target.value)}
            placeholder="Write your announcement..."
          /><br></br>
          <button onClick={handlePostAnnouncement}>Post</button>
          <ul className="announcement-list">
            {announcements.map((a, i) => (
              <li key={i}><strong>{a.date}:</strong> {a.text}</li>
            ))}
          </ul>
        </section>

        {/* Requests */}
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
         {/* Upload Requested Resources */}
<section className="section upload-resources">
  <h2>Upload Requested Resources</h2>
  <form onSubmit={(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const file = formData.get("resourceFile");
    const description = formData.get("description");

    if (!file || !description) {
      alert("Please provide both a file and description.");
      return;
    }

    console.log("File uploaded:", file.name);
    console.log("Description:", description);
    alert("Resource uploaded successfully!");

    // Clear form
    e.target.reset();
  }}>
    <input
      type="file"
      name="resourceFile"
      accept=".pdf,.doc,.docx,.ppt,.pptx,.zip"
      required
    /><br />
    <textarea
      name="description"
      placeholder="Enter a short description of the resource"
      required
    ></textarea><br />
    <button type="submit">Upload Resource</button>
  </form>
</section>
 
        {/* Reports */}
        <section className="section reports">
          <h2>Reports</h2>
          <p>Total Requests: <strong>{reports.totalRequests}</strong></p>
          <p>Active Users: <strong>{reports.activeUsers}</strong></p>

          <div className="charts-container">
            <div className="chart-card">
              <h3>Request Status Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={requestStatusData} dataKey="value" nameKey="name" outerRadius={80}>
                    {requestStatusData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <LabelList dataKey="name" position="outside" />
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h3>Courses by Name</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Courses" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="section courses">
          <h2>Manage Courses</h2>
          <button className="toggle-add" onClick={() => setShowAddCourse(!showAddCourse)}>
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
                    <button className="cancel" onClick={() => setEditingId(null)}>Cancel</button>
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
    </>
  );
};

export default FacultyDashboard;
