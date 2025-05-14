import { useState } from 'react';
import AdminHeader from './adminheader';

export default function ViewRequests() {
  const [requests, setRequests] = useState([
    { id: 1, student: 'Yokey', type: 'Library Access', status: 'Pending' },
    { id: 2, student: 'Virat', type: 'Resource Upload', status: 'Approved' },
    { id: 3, student: 'Kohli', type: 'Course Enrollment', status: 'Rejected' },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setRequests(requests.map(req =>
      req.id === id ? { ...req, status: newStatus } : req
    ));
  };

  return (
    <>
    <AdminHeader/>
    <div className="section">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Student Requests</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-3 text-left">Student</th>
              <th className="p-3 text-left">Request Type</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(req => (
              <tr key={req.id} className="border-b hover:bg-blue-50">
                <td className="p-3">{req.student}</td>
                <td className="p-3">{req.type}</td>
                <td className={`p-3 status ${req.status.toLowerCase()}`}>{req.status}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleStatusChange(req.id, 'Approved')}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 mr-2"
                    style={{
                  width:'80px',
                  borderRadius:'10px',
                  
                }}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(req.id, 'Rejected')}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    style={{
                  width:'80px',
                  borderRadius:'10px'
                }}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
