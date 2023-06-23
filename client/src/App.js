import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/login/Login';
import Leave from './components/leave/Leave';
import RegisterForm from './components/register/Register';
import Student from "./pages/student/Student";
import Faculty from './pages/faculty/Faculty';
import Warden from './pages/warden/Warden';

export default function App() {
  const [role, setRole] = useState('student');
  const [authenticated, setAuthenticatedstudent] = useState(false);
  const [authenticatedfaculty, setAuthenticatedfaculty] = useState(false);
  const [authenticatedwarden, setAuthenticatedwarden] = useState(false);


  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticatedstudent') === 'true';
    const isAuthenticatedfaculty = localStorage.getItem('authenticatedfaculty') === 'true';
    const isAuthenticatedwarden = localStorage.getItem('authenticatedwarden') === 'true';

    setAuthenticatedstudent(isAuthenticated);
    setAuthenticatedfaculty(isAuthenticatedfaculty);
    setAuthenticatedwarden(isAuthenticatedwarden);
  }, []);


  const handleLogin = (e, selectedUserType) => {
    e.preventDefault();

    const isAuthenticated = true;

    if (selectedUserType === "student") {
      setRole("student");
      localStorage.setItem('authenticatedstudent', 'true');
      setAuthenticatedstudent(true);
    } else if (selectedUserType === "faculty") {
      setRole("faculty");
      localStorage.setItem('authenticatedfaculty', 'true');
      setAuthenticatedfaculty(true);
    } else if (selectedUserType === "warden") {
      setRole("warden");
      localStorage.setItem('authenticatedwarden', 'true');
      setAuthenticatedwarden(true);
    }
  };


  const handleLogout = () => {
    // Remove the authentication status from the browser
    localStorage.removeItem('authenticatedstudent');
    localStorage.removeItem('authenticatedfaculty');
    setAuthenticatedstudent(false);
    setAuthenticatedfaculty(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/signin"
            element={
              authenticated ? (
                <Navigate to={`/${role}`} />
              ) : (
                <LoginForm handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/register"
            element={
              authenticated ? (
                <Navigate to={`/${role}`} />
              ) : (
                <RegisterForm />
              )
            }
          />
          <Route
            path="/student"
            element={
              authenticated ? (
                <Student handleLogout={handleLogout} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="/warden"
            element={
              authenticatedwarden ? (
                <Warden handleLogout={handleLogout} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />

          <Route
            path="/leave"
            element={
              authenticated ? (
                <Leave />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="/faculty"
            element={
              authenticatedfaculty ? (
                <Faculty handleLogout={handleLogout} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="/"
            element={
              authenticated ? (
                role === "faculty" ? (
                  <Navigate to="/faculty" />
                ) : role === "warden" ? (
                  <Navigate to="/warden" />
                ) : (
                  <Navigate to="/student" />
                )
              ) : (
                <Navigate to="/signin" />
              )
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

