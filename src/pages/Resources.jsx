// src/pages/Resources.jsx
import React from 'react';
import './Resource.css'; // Add the styling for the page

const Resources = () => {
  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <p>Access all the study materials, collaborative tools, and resources to help you succeed in your academic journey.</p>
      <div className="resources-list">
        <h2>Study Materials</h2>
        <p>Download notes, textbooks, and guides for various subjects.</p>
        <h2>Collaborative Tools</h2>
        <p>Utilize online tools for group projects, assignments, and discussions.</p>
      </div>
    </div>
  );
};

export default Resources;
