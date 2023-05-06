import React from 'react';
import './App.css';
import './Login.js';
// import { useMediaQuery } from 'react-responsive'

function App() {

  return (
    <div className="container">
      <header>
        <h1 className='heading'>Emergency <span className='title'>VITConnect</span> </h1>
        <h3> Connecting emergency medical assistance at ease...</h3>
      </header>
      <div className="content">
        <ul className="button-container">
          <li><button onClick={() => window.open("./Login.js", "_blank")}>Student Login</button></li>
          <li><button>About Us</button></li>
          <li><button>Contact Us</button></li>
        </ul>
        <div className="image-container">
          <img src={require("./images/Ambulance.png")} alt="Placeholder" />
        </div>
      </div>
    </div>
  );
  
}

export default App;
