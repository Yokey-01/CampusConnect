import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';
import './theme.css';
import HomePage from './pages/HomePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HomePage/> */}
    <AppRoutes/>
  </React.StrictMode>
);