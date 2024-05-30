import React from 'react';
import './Login.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig';

const Login = ({ toggleLogin }) => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
     return signInWithPopup(auth, provider);
  };

  return (
    <div className='login-overlay'>
      <div className='login-container'>
        <button className='close-button' onClick={toggleLogin}>X</button>
        <div className='header'>
          <div className='login-text'>Login</div>
        </div>
        <div className='inputs'>
          <div className='input'>
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className='input'>
            <input type='password' placeholder='Enter your password' />
          </div>
        </div>
        <div className='forgot-password'>Lost password</div>
        <div className='submit-container'>
          <div className='submit'>Login</div>
          <div className='submit' onClick={handleGoogleSignIn}>Login with Google</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
