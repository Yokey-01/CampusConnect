import { useState } from 'react';
import AdminHeader from './adminheader';


export default function AdminAnnouncements() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Internal Audit on Monday', date: '2025-05-12' },
    { id: 2, title: 'Semester Results to be uploaded', date: '2025-05-10' },
  ]);
  const [newAnnouncement, setNewAnnouncement] = useState('');

  const addAnnouncement = () => {
    if (newAnnouncement.trim() === '') return;
    const newEntry = {
      id: Date.now(),
      title: newAnnouncement,
      date: new Date().toISOString().split('T')[0],
    };
    setAnnouncements([newEntry, ...announcements]);
    setNewAnnouncement('');
  };

  const deleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(ann => ann.id !== id));
  };

  const handleBack = () => navigate(-1); // Go to previous page

  return (
    <>
      <AdminHeader/>

      <div className="section px-4 py-6 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Manage Announcements</h2>

        {/* Add New Announcement */}
        <div className="mb-6 flex flex-col sm:flex-row gap-3"
        style={{
        width:'40%',
        display:'flex',
        flexDirection:'column',
        // alignItems:'center',
        marginLeft:'20px'
      }}>
          <input
            type="text"
            value={newAnnouncement}
            onChange={(e) => setNewAnnouncement(e.target.value)}
            placeholder="Enter announcement title..."
            className="flex-1 p-3 border border-blue-300 rounded"
          />
          <button
            onClick={addAnnouncement}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            style={{
              marginLeft:'10px',
              width:'80px'
            }}
          >
            Add
          </button>
        </div>

        {/* List of Announcements */}
        <ul className="space-y-3">
          {announcements.map((ann) => (
            <li
              key={ann.id}
              className="p-4 bg-blue-50 rounded flex justify-between items-center shadow"
            >
              <div>
                <p className="text-blue-900 font-semibold">{ann.title}</p>
                <p className="text-sm text-gray-600">{ann.date}</p>
              </div>
              <button
                onClick={() => deleteAnnouncement(ann.id)}
                className="text-red-500 font-medium hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
