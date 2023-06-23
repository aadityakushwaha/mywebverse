import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/login/Login';
import Leave from './components/leave/Leave';
import RegisterForm from './components/register/Register';
import Student from "./pages/student/Student";
import Faculty from './pages/faculty/Faculty';


function App() {
  const [authenticated, setAuthenticatedstudent] = useState(false);
  useEffect(() => {
    // Check if the user is already authenticated
    const isAuthenticated = localStorage.getItem('authenticatedstudent') === 'true';
    setAuthenticatedstudent(isAuthenticated);
  }, []);

  const handleLogin = (e,selectedUserType) => {
    e.preventDefault();

    // Perform authentication logic here (e.g., API call or local validation)
    const isAuthenticated = true;

    if (selectedUserType == "student") {
      // Store the authentication status in the browser
      localStorage.setItem('authenticatedstudent', 'true');
      setAuthenticatedstudent(true);
    }
    else if (selectedUserType == "faculty") {
      // Store the authentication status in the browser
      localStorage.setItem('authenticatedfaculty', 'true');
      setAuthenticatedstudent(true);
    }
  };

  const handleLogout = () => {
    // Remove the authentication status from the browser
    localStorage.removeItem('authenticated');
    setAuthenticatedstudent(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={authenticated ? <Navigate to="/student" /> : <LoginForm handleLogin={handleLogin} />} />
          <Route path="/register" element={authenticated ? <Navigate to="/student" /> : <RegisterForm />} />
          <Route path="/student" element={authenticated ? <Student handleLogout={handleLogout} /> : <Navigate to="/signin" />} />
          <Route path="/leave" element={isLoggedIn ? <Leave /> : <Navigate to="/signin" />} />
          <Route path="/" element={authenticated ? <Student handleLogout={handleLogout} /> : <Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
