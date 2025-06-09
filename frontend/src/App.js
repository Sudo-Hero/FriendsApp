import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute'; // adjust path as needed
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import RegistrationPage from './RegistrationPage';
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationPage />} />

          {/* Protected Routes */}
          <Route
            path="/user/:id"
            element={
              <PrivateRoute>
                <UserDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/Edit/:id"
            element={
              <PrivateRoute>
                <UserEdit />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
