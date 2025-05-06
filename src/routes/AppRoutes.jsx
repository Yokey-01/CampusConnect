import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import StudentDashboard from '../components/StudentDashboard';
import RequestForm from '../components/RequestForm';
import ProfilePage from '../components/ProfilePage';
import Home from '../pages/HomePage';
import Register from '../pages/Register';
import Community from '../pages/Community';
import Resources from '../pages/Resources';
import Events from '../pages/Event';
import FacultyDashboard from '../components/facultyDash';
import BasicHome from '../pages/basichome';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/" element={<BasicHome/>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<StudentDashboard />} />
      <Route path="/new-request" element={<RequestForm />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/community" element={<Community />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/events" element={<Events />} />
      <Route path="/facdashboard" element={<FacultyDashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;