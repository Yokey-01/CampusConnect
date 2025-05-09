import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import StudentDashboard from '../components/StudentDashboard';
import RequestForm from '../components/RequestForm';
import StuProfilePage from '../components/StuProfilePage';
import SHome from '../pages/StuHomePage';
import Register from '../pages/Register';
import Community from '../pages/Community';
import Resources from '../pages/Resources';
import Events from '../pages/Event';
import FacultyDashboard from '../components/facultyDash';
import BasicHome from '../pages/basichome';
import FacHome from '../pages/FacHomePage';
import FacProfilePage from '../components/facProfilePage';
import RequestResources from '../components/RequestResources';
import Admin from '../components/admindash';
import UserManagement from '../components/Admin/usermanagement';
import AdminDashboard from '../components/Admin/dashboard';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
    <Route path="/stuhome" element={<SHome/>} />
    <Route path="/fachome" element={<FacHome/>} />
    <Route path="/" element={<BasicHome/>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<StudentDashboard />} />
      <Route path="/new-request" element={<RequestForm />} />
      <Route path="/stu-profile" element={<StuProfilePage />} />
      <Route path="/fac-profile" element={<FacProfilePage />} />
      <Route path="/community" element={<Community />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/events" element={<Events />} />
      <Route path="/facdashboard" element={<FacultyDashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/usermanagement" element={<UserManagement />} />
      <Route path="/admin/dashboard" element={<AdminDashboard/>} />

      <Route path="/request-resources" element={<RequestResources />} />

    </Routes>
  </BrowserRouter>
);

export default AppRoutes;