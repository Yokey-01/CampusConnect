import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser, FaGraduationCap, FaPhone, FaMapMarkerAlt,
  FaTransgender, FaIdBadge, FaEnvelope
} from 'react-icons/fa';
import './ProfilePage.css';

const StuProfilePage = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: '',
    rollNumber: '',
    department: '',
    year: '',
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
        name: 'Yokeyntrra S',
        rollNumber: '717821i261',
        department: 'AD',
        year: '4th Year',
        gender: 'Male',
        email: 'yokey@gmail.com',
        contact: '6374180694',
        address: 'KCE Hostel, Block B, Room 203',
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
    console.log('Saving student profile...', profile);
    alert('Student profile updated successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('studentToken');
    navigate('/');
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">Profile</h2>

        <form>
          {/* Profile Image Section */}
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

          {/* Profile Fields */}
          <div className="form-grid">
            {[ 
              { label: 'Full Name', name: 'name', icon: <FaUser /> },
              { label: 'Roll Number', name: 'rollNumber', icon: <FaIdBadge /> },
              { label: 'Department', name: 'department', icon: <FaGraduationCap /> },
              { label: 'Year', name: 'year', icon: <FaGraduationCap /> },
              { label: 'Gender', name: 'gender', icon: <FaTransgender /> },
              { label: 'Email', name: 'email', icon: <FaEnvelope />, type: 'email' },
              { label: 'Contact Number', name: 'contact', icon: <FaPhone /> },
              { label: 'Address', name: 'address', icon: <FaMapMarkerAlt /> }
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
          </div>

          {/* Buttons */}
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

export default StuProfilePage;
