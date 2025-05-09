import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from 'recharts';
import './admindashi.css';

const userStats = [
  { name: 'Students', value: 820 },
  { name: 'Faculty', value: 360 },
];

const requestStats = [
  { type: 'Pending', count: 18 },
  { type: 'Approved', count: 120 },
  { type: 'Rejected', count: 45 },
];

const COLORS = ['#1e40af', '#3b82f6', '#60a5fa'];

export default function AdminDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Virat', email: 'Virat@gmail.com', role: 'Student', lastLogin: '2025-05-08' },
    { id: 2, name: 'Kohli', email: 'Kohli@gmail.com', role: 'Faculty', lastLogin: '2025-05-07' },
  ]);

  const [requests, setRequests] = useState([
    { id: 1, name: 'KL Rahul', type: 'Library Access', status: 'Pending' },
    { id: 2, name: 'Shreyas', type: 'Resource Upload', status: 'Approved' },
  ]);

  const deleteUser = (id) => setUsers(users.filter(user => user.id !== id));
  const changeRequestStatus = (id, status) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status } : req));
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-['Segoe_UI']">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Admin Dashboard</h1>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[{ label: 'Total Users', value: 1180 }, { label: 'Courses', value: 45 }, { label: 'Pending Requests', value: 18 }, { label: 'Announcements', value: 12 }].map(stat => (
            <div key={stat.label} className="bg-blue-100 text-blue-900 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h2 className="text-blue-900 text-lg font-semibold mb-4">User Roles</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={userStats} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {userStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h2 className="text-blue-900 text-lg font-semibold mb-4">Request Status</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={requestStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-xl shadow p-6 mb-12">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">User Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Last Login</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b hover:bg-blue-50">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>
                    <td className="p-3">{user.lastLogin}</td>
                    <td className="p-3">
                      <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Request Management */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Request Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Request Type</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map(req => (
                  <tr key={req.id} className="border-b hover:bg-blue-50">
                    <td className="p-3">{req.name}</td>
                    <td className="p-3">{req.type}</td>
                    <td className="p-3">{req.status}</td>
                    <td className="p-3">
                      <button onClick={() => changeRequestStatus(req.id, 'Approved')} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 mr-2">
                        Approve
                      </button>
                      <button onClick={() => changeRequestStatus(req.id, 'Rejected')} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
