import { useState } from 'react';

export default function AdminCourses() {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Computer Networks', description: 'Study of data transmission protocols.' },
    { id: 2, title: 'Software Engineering', description: 'Principles of software development.' },
  ]);

  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  const handleAddCourse = () => {
    if (newCourse.title && newCourse.description) {
      setCourses([
        ...courses,
        { id: Date.now(), title: newCourse.title, description: newCourse.description },
      ]);
      setNewCourse({ title: '', description: '' });
    }
  };

  const handleDelete = (id) => setCourses(courses.filter(c => c.id !== id));

  const handleUpdate = (id) => {
    setCourses(courses.map(c =>
      c.id === id ? { ...c, ...newCourse } : c
    ));
    setEditingId(null);
    setNewCourse({ title: '', description: '' });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Course Management</h2>

      {/* Add/Edit Form */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Course Title"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
          className="w-full p-2 mb-2 border border-blue-300 rounded"
        />
        <textarea
          rows={2}
          placeholder="Description"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
          className="w-full p-2 mb-2 border border-blue-300 rounded"
        />
        {editingId ? (
          <button
            onClick={() => handleUpdate(editingId)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Update Course
          </button>
        ) : (
          <button
            onClick={handleAddCourse}
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Add Course
          </button>
        )}
      </div>

      {/* Course List */}
      <ul className="space-y-4">
        {courses.map(course => (
          <li
            key={course.id}
            className="p-4 bg-blue-50 rounded shadow flex justify-between items-start"
          >
            <div>
              <h3 className="text-lg font-bold text-blue-900">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditingId(course.id);
                  setNewCourse({ title: course.title, description: course.description });
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(course.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
