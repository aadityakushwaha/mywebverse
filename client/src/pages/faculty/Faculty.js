import React from 'react';

function Faculty({ handleLogout }) {
  const handleClick = () => {
    // Call the handleLogout function
    handleLogout();
  };

  return (
    <div>
      <h1>Faculty Page</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Faculty;
