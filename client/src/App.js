import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './component/login/Login';
import RegisterForm from './component/register/Register';
import Student from "./pages/student/Student";

function App() {
  const isLoggedIn = true;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/student" element={isLoggedIn ? <Student /> : <Navigate to="/signin" />} />
          <Route path="/" element={isLoggedIn ? <Student /> : <Navigate to="/signin" />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

