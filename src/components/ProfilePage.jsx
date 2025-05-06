import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaGraduationCap, FaPhone, FaAddressCard, FaTransgender } from 'react-icons/fa';
import './ProfilePage.css'; // Custom CSS file for styling

const ProfilePage = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: 'John Doe',
    department: 'Computer Science',
    contact: 'john@example.com',
    rollNumber: 'CS2025001',
    year: '3rd Year',
    gender: 'Male',
    address: '123, Campus Road, City',
  });

  const handleChange = e => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Updated Profile:', profile);
    // alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">👤 My Profile</h2>

        <form>
          {[
            { label: 'Full Name', name: 'name', icon: <FaUser /> },
            { label: 'Roll Number', name: 'rollNumber', icon: <FaAddressCard /> },
            { label: 'Department', name: 'department', icon: <FaGraduationCap /> },
            { label: 'Academic Year', name: 'year', icon: <FaGraduationCap /> },
            { label: 'Gender', name: 'gender', icon: <FaTransgender /> },
            { label: 'Contact Email', name: 'contact', icon: <FaPhone />, type: 'email' },
            { label: 'Address', name: 'address', icon: <FaAddressCard /> },
          ].map(({ label, name, icon, type = 'text' }) => (
            <div className="input-group" key={name}>
              <label>{icon} {label}</label>
              <input
                type={type}
                name={name}
                value={profile[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="profile-buttons">
            <button type="button" onClick={handleSave} className="btn save-btn">
              Save Changes
            </button>
            <button type="button" onClick={handleLogout} className="btn logout-btn">
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
