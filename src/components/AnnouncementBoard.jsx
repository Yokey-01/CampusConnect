import React from 'react';

const mockAnnouncements = [
  { id: 1, title: 'Exam Schedule Released', date: '2025-04-10' },
  { id: 2, title: 'Holiday on 25th May', date: '2025-05-25' },
];

const AnnouncementBoard = () => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {mockAnnouncements.map(ann => (
        <li key={ann.id} className="card" style={{ margin: '0.5rem 0' }}>
          <strong>{ann.title}</strong>
          <div style={{ fontSize: '0.8rem' }}>{ann.date}</div>
        </li>
      ))}
    </ul>
  );
};

export default AnnouncementBoard;