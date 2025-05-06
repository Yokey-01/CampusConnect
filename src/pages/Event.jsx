// src/pages/Events.jsx
import React from 'react';
import './Event.css'; // Add the styling for the page

const Events = () => {
  return (
    <div className="events-container">
      <h1>Events</h1>
      <p>Stay up-to-date with campus events, workshops, and seminars.</p>
      <div className="events-list">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Campus Seminar on AI - June 10</li>
          <li>Workshop on Web Development - June 15</li>
          <li>Annual Cultural Fest - July 1</li>
        </ul>
      </div>
    </div>
  );
};

export default Events;
