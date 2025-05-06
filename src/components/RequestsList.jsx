import React from 'react';

const mockRequests = [
  { id: 1, type: 'Leave', status: 'Approved', date: '2025-05-01' },
  { id: 2, type: 'Certificate', status: 'Pending', date: '2025-05-06' },
];

const RequestsList = () => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {mockRequests.map(req => (
        <li key={req.id} className="card" style={{ margin: '0.5rem 0' }}>
          <strong>{req.type}</strong> — <em>{req.status}</em>
          <div style={{ fontSize: '0.8rem' }}>{req.date}</div>
        </li>
      ))}
    </ul>
  );
};

export default RequestsList;