import React, { useState } from 'react';
import './Home.css';
import Features from '../Features/Features';
import Faq from '../Faq/Faq';
import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      {showSignup && <Signup toggleSignup={toggleSignup} />}
      <div className='homeSection'>
        <header>
          <nav>
            <ul>
              <li>Home</li>
              <li>< Link to="/TrackTrace">Track and Trace</Link></li>
              <li>< Link to="/sales">Sales</Link></li>
              <li>Getting started</li>
            </ul>
            <button onClick={toggleSignup}>Sign Up</button>
          </nav>
        </header>
        <div className='info'>
          <h1>Enhancing Supply Chain Transparency</h1>
          <h1>with Track and Trace</h1>
          <p>Today’s supply chains involve manufacturers, suppliers, logistics companies, and retailers. As these chains grow, managing them becomes increasingly complex.</p>
          <p>Paper-based methods create silos and complicate tracking. Blockchain ensures traceability and reduces delays and errors.</p>
          <button>Get started</button>
        </div>
      </div>
      <Features />
      <Faq />
    </div>
  );
};

export default Home;
