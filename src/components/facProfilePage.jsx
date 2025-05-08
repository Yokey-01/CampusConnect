import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser, FaChalkboardTeacher, FaPhone, FaMapMarkerAlt,
  FaTransgender, FaIdBadge, FaEnvelope
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ProfilePage.css';

const FacProfilePage = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: '',
    employeeId: '',
    department: '',
    designation: '',
    gender: '',
    email: '',
    contact: '',
    address: '',
    photo: null
  });

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const sampleData = {
        name: 'Mr. Arul Antran Vijay',
        employeeId: 'FAC2024012',
        department: 'CSE',
        designation: 'Associate Professor',
        gender: 'Male',
        email: 'arulantranvijay@kce.ac.in',
        contact: '9876543210',
        address: 'KCE Campus, Main Block',
        photo: null
      };
      setProfile(sampleData);
    }, 500);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(prev => ({ ...prev, photo: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setProfile(prev => ({ ...prev, photo: null }));
    setPreviewImage(null);
  };

  const handleSave = () => {
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('facultyToken');
    navigate('/');
  };

  return (
    <div className="profile-container">
      <motion.div
        className="profile-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="profile-title">Faculty Profile</h2>

        <form>
          {/* Profile Image */}
          <div className="profile-image-section">
            <div className="image-wrapper">
              {previewImage ? (
                <img src={previewImage} alt="Profile" className="profile-img" />
              ) : (
                <div className="placeholder-img">No Image</div>
              )}
              <div className="image-actions">
                <label htmlFor="profilePic" className="btn small-btn edit-btn">
                  {previewImage ? 'Edit' : 'Upload'}
                </label>
                {previewImage && (
                  <button
                    type="button"
                    className="btn small-btn remove-btn"
                    onClick={handleRemoveImage}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>

          {/* Form Fields */}
          <div className="form-grid">
            {[
              { label: 'Full Name', name: 'name', icon: <FaUser /> },
              { label: 'Employee ID', name: 'employeeId', icon: <FaIdBadge /> },
              { label: 'Department', name: 'department', icon: <FaChalkboardTeacher /> },
              { label: 'Designation', name: 'designation', icon: <FaChalkboardTeacher /> },
              { label: 'Gender', name: 'gender', icon: <FaTransgender /> },
              { label: 'Email', name: 'email', icon: <FaEnvelope />, type: 'email' },
              { label: 'Contact Number', name: 'contact', icon: <FaPhone /> },
              { label: 'Address', name: 'address', icon: <FaMapMarkerAlt /> }
            ].map(({ label, name, icon, type = 'text' }) => (
              <motion.div
                className="input-group"
                key={name}
                whileFocus={{ scale: 1.03 }}
              >
                <label>{icon} {label}</label>
                <input
                  type={type}
                  name={name}
                  value={profile[name]}
                  onChange={handleChange}
                />
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="profile-buttons">
            <motion.button
              type="button"
              className="btn save-btn"
              whileHover={{ scale: 1.05 }}
              onClick={handleSave}
            >
              Save Changes
            </motion.button>
            <motion.button
              type="button"
              className="btn logout-btn"
              whileHover={{ scale: 1.05 }}
              onClick={handleLogout}
            >
              Logout
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default FacProfilePage;
