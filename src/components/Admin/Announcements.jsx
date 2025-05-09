import { useState } from 'react';

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Exam Schedule Released', date: '2025-05-05' },
    { id: 2, title: 'Library Closed on Friday', date: '2025-05-07' },
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

  return (
    <div className="section">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Manage Announcements</h2>

      {/* Add New Announcement */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3">
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
  );
}
