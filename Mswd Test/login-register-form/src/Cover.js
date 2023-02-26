import React from 'react';
import './Cover.css';

export const Cover = (props) => {
  return (
    <div className="home-container">
      
      <div className="content">
        <h1>Welcome to Strix</h1>
        <p>Providing comprehensive rentals for cars</p>
        <div className="buttons">
        <button onClick={() =>props.onFormSwitch('login')} variant="contained" color="secondary">Sign In</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
