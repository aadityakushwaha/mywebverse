import React, { useState } from 'react';
import './styles.css'; // Assuming the CSS code is in a file named 'styles.css'
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({ handleLogin }) {
  const navigate = useNavigate();
  const themes = [
    {
      background: "#1A1A2E",
      color: "#FFFFFF",
      primaryColor: "#0F3460"
    },
    {
      background: "#461220",
      color: "#FFFFFF",
      primaryColor: "#E94560"
    },
    {
      background: "#192A51",
      color: "#FFFFFF",
      primaryColor: "#967AA1"
    },
    {
      background: "#F7B267",
      color: "#000000",
      primaryColor: "#F4845F"
    },
    {
      background: "#F25F5C",
      color: "#000000",
      primaryColor: "#642B36"
    },
    {
      background: "#231F20",
      color: "#FFF",
      primaryColor: "#BB4430"
    }
  ];

  const [selectedUserType, setSelectedUserType] = useState('faculty'); // Default user type is 'faculty'
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState('');

  const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--glass-color", theme.glassColor);
  };

  const displayThemeButtons = () => {
    const btnContainer = document.querySelector(".theme-btn-container");
    themes.forEach((theme) => {
      const div = document.createElement("div");
      div.className = "theme-btn";
      div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
      btnContainer.appendChild(div);
      div.addEventListener("click", () => setTheme(theme));
    });
  };

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Code to handle form submission and obtain the token...
  //   // Replace this code with your actual authentication logic

  //   handleLogin(event,selectedUserType);

  //   if (selectedUserType == "student") {
  //     navigate('/student');
  //   }
  //   else if (selectedUserType == "faculty") {
  //     navigate('/faculty');
  //   }


  // };
  const handleSubmit = (event) => {
    event.preventDefault();

    // API endpoint and request payload

    const url = `http://localhost:8181/api/v1/${selectedUserType}/auth/login`;
    const payload = {
      regNo: username,
      password: password
    };

    // Make the API request
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          handleLogin(event, selectedUserType);
          navigate(`/${selectedUserType}`);

        }
      })
      .then(data => console.log(data))
    //.then(data => {
    //console.log(data.status);

    // Handle the API response
    //You can do further processing here

    // Store the token and user type in localStorage
    //localStorage.setItem('token', data.token);
    //localStorage.setItem('userType', data.data.userType);
  
      .catch (error => {
    // Handle any errors
    console.error('Error:', error);
  }
  );
};



return (
  <div>
    <section className="container">
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
          {/* <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" /> */}
          <h1 className="opacity">LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="USERNAME" value={username} onChange={handleUsernameChange} />
            <input type="password" placeholder="PASSWORD" value={password} onChange={handlePasswordChange} />

            {/* Radio buttons for user type */}
            <div className="user-type-container">
              <label>
                <input
                  type="radio"
                  value="faculty"
                  checked={selectedUserType === 'faculty'}
                  onChange={handleUserTypeChange}
                />
                Faculty
              </label>
              <label>
                <input
                  type="radio"
                  value="student"
                  checked={selectedUserType === 'student'}
                  onChange={handleUserTypeChange}
                />
                Student
              </label>
              <label>
                <input
                  type="radio"
                  value="warden"
                  checked={selectedUserType === 'warden'}
                  onChange={handleUserTypeChange}
                />
                Warden
              </label>
            </div>

            <button className="opacity">SUBMIT</button>
          </form>
          <div className="register-forget opacity">
            <Link to="/register">REGISTER</Link>
          </div>
        </div>
        <div className="circle circle-two"></div>
      </div>
      <div className="theme-btn-container"></div>
    </section>
  </div>
);
};

export default LoginForm;

