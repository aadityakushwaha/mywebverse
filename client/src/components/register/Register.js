import React, { useState } from 'react';
import './styles.css';

const RegisterForm = () => {
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

  const [selectedUserType, setSelectedUserType] = useState('student');
  const [isHOD, setIsHOD] = useState(false);

  const setTheme = (theme) => {
    document.documentElement.style.setProperty("--background", theme.background);
    document.documentElement.style.setProperty("--color", theme.color);
    document.documentElement.style.setProperty("--primary-color", theme.primaryColor);
  };

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  const handleHODChange = (event) => {
    setIsHOD(event.target.checked);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Prepare the request body based on the selected user type
    let requestBody = {};

    if (selectedUserType === 'student') {
      requestBody = {
        name: event.target.name.value,
        regNo: event.target.regNo.value,
        block: event.target.block.value,
        password: event.target.password.value,
        roomNo: event.target.roomNo.value
      };
    } else if (selectedUserType === 'faculty') {
      requestBody = {
        name: event.target.name.value,
        empId: event.target.empId.value,
        password: event.target.password.value,
        isHOD: isHOD
      };
    }

    // Make the API request with the prepared request body
    fetch(`http://localhost:8000/api/v1/${selectedUserType}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then((response) => {
        if (response.status === 201) {
          // Registration successful
          console.log('Registration successful');
          // Reset the form fields
          event.target.reset();
          // Display a success message to the user (you can use a toast or alert component)
          alert('Registration successful');
        } else {
          // Registration failed
          console.log('Registration failed');
          // Display an error message to the user (you can use a toast or alert component)
          alert('Registration failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
            <h1 className="opacity">Register</h1>
            <form onSubmit={handleFormSubmit}>
              {selectedUserType === 'student' && (
                <div>
                  <input type="text" name="name" placeholder="Name" required />
                  <input type="text" name="regNo" placeholder="Registration Number" required />
                  <input type="text" name="block" placeholder="Block (A, B, C, D)" required />
                  <input type="password" name="password" placeholder="Password" required />
                  <input type="text" name="roomNo" placeholder="Room Number" required />
                </div>
              )}

              {selectedUserType === 'faculty' && (
                <div>
                  <input type="text" name="name" placeholder="Name" required />
                  <input type="text" name="empId" placeholder="Employee ID" required />
                  <input type="password" name="password" placeholder="Password" required />
                  <input type="checkbox" name="isHOD" checked={isHOD} onChange={handleHODChange} />
                  <label htmlFor="isHOD">HOD Status</label>
                </div>
              )}

              {/* {selectedUserType === 'warden' && ( */}
              {/*   <div> */}
              {/*     <input type="text" name="name" placeholder="Name" required /> */}
              {/*     <input type="text" name="block" placeholder="Block (A, B, C, D)" required /> */}
              {/*     <input type="password" name="password" placeholder="Password" required /> */}
              {/*   </div> */}
              {/* )} */}

              <div className="user-type-container">
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
                    value="faculty"
                    checked={selectedUserType === 'faculty'}
                    onChange={handleUserTypeChange}
                  />
                  Faculty
                </label>
                {/* <label> */}
                {/*   <input */}
                {/*     type="radio" */}
                {/*     value="warden" */}
                {/*     checked={selectedUserType === 'warden'} */}
                {/*     onChange={handleUserTypeChange} */}
                {/*   /> */}
                {/*   Warden */}
                {/* </label> */}
              </div>

              <button type="submit" className="opacity">Submit</button>
            </form>

            <div className="register-forget opacity">
              <a href="">SignIn</a>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="theme-btn"
              style={{ background: theme.background, width: "25px", height: "25px" }}
              onClick={() => setTheme(theme)}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;