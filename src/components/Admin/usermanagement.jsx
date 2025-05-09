import { useState } from 'react';

const getInitials = (name) => name.split(' ').map(n => n[0]).join('');

export default function UserManagement() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Thomas', email: 'alice@student.edu', course: 'B.Tech CSE', joined: '2024-07-10', status: 'Active' },
    { id: 2, name: 'Bob Kevin', email: 'bob@student.edu', course: 'B.Sc IT', joined: '2023-11-05', status: 'Inactive' },
  ]);

  const [faculty, setFaculty] = useState([
    { id: 1, name: 'Dr. Kavitha R.', email: 'kavitha@faculty.edu', dept: 'Computer Science', designation: 'Professor', joined: '2022-03-20', status: 'Active' },
    { id: 2, name: 'Mr. Saravanan M.', email: 'saravanan@faculty.edu', dept: 'Mathematics', designation: 'Asst. Professor', joined: '2021-08-15', status: 'Active' },
  ]);

  const deleteStudent = (id) => setStudents(students.filter(s => s.id !== id));
  const deleteFaculty = (id) => setFaculty(faculty.filter(f => f.id !== id));

  return (
    <div className="p-6 space-y-12 bg-gray-50 min-h-screen">
      
      {/* STUDENTS TABLE */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Student Accounts</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow border border-blue-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-4 border-r border-blue-700">Name</th>
                <th className="p-4 border-r border-blue-700">Email</th>
                <th className="p-4 border-r border-blue-700">Course</th>
                <th className="p-4 border-r border-blue-700">Joined</th>
                <th className="p-4 border-r border-blue-700">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s.id} className="border-t border-gray-200 hover:bg-gray-100">
                  <td className="p-4 flex items-center space-x-3">
                    <div className="bg-blue-700 text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold">
                      {getInitials(s.name)}
                    </div>
                    <span>{s.name}</span>
                  </td>
                  <td className="p-4">{s.email}</td>
                  <td className="p-4">{s.course}</td>
                  <td className="p-4">{s.joined}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-sm font-medium rounded-full ${
                      s.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => deleteStudent(s.id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-500">No students found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* FACULTY TABLE */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Faculty Accounts</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow border border-blue-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-4 border-r border-blue-700">Name</th>
                <th className="p-4 border-r border-blue-700">Email</th>
                <th className="p-4 border-r border-blue-700">Department</th>
                <th className="p-4 border-r border-blue-700">Designation</th>
                <th className="p-4 border-r border-blue-700">Joined</th>
                <th className="p-4 border-r border-blue-700">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {faculty.map(f => (
                <tr key={f.id} className="border-t border-gray-200 hover:bg-gray-100">
                  <td className="p-4 flex items-center space-x-3">
                    <div className="bg-indigo-700 text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold">
                      {getInitials(f.name)}
                    </div>
                    <span>{f.name}</span>
                  </td>
                  <td className="p-4">{f.email}</td>
                  <td className="p-4">{f.dept}</td>
                  <td className="p-4">{f.designation}</td>
                  <td className="p-4">{f.joined}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-sm font-medium rounded-full ${
                      f.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {f.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => deleteFaculty(f.id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {faculty.length === 0 && (
                <tr>
                  <td colSpan="7" className="p-4 text-center text-gray-500">No faculty found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
