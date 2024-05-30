import React, { useState } from 'react';
import './Signup.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig';
import Login from '../Login/Login'; 

const Signup = ({ toggleSignup }) => {
  const [showLoginForm, setShowLoginForm] = useState(false); 

  const handleGoogleSignIn = async (e) =>{
     const provider = await new GoogleAuthProvider();
     return signInWithPopup(auth, provider);
  }

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className='signup-overlay'>
      <div className='signup-container'>
        <button className='close-button' onClick={toggleSignup}>X</button>
        <div className='header'>
          <div className='signup-text'>Sign up</div>
        </div>
        <div className='inputs'>
          <div className='input'>
            <input type='text' placeholder='Enter your name' required />
          </div>
          <div className='input'>
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className='input'>
            <input type='password' placeholder='Enter your password' />
          </div>
        </div>
        <div className='forgot-password'>Lost password</div>
        <div className='submit-container'>
          <div className='submit'>Sign up</div>
          <div className='submit' onClick={toggleLoginForm}>Login</div> {/* Toggle login form visibility */}
          <div className='submit' onClick={handleGoogleSignIn}>Sign in with Google</div>
        </div>
      </div>
      {showLoginForm && <Login toggleLogin={toggleLoginForm} />} {/* Render login form if showLoginForm is true */}
    </div>
  );
};

export default Signup;
