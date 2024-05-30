

import React from 'react';
import './Features.css'; 
import phone from '../assets/phone.svg';
import secure from '../assets/secure.svg';

const Features = () => {
  return (
    <div className='features'> 
    <h1>Enjoy Our Features</h1>
    <p>We provide visibility into supply chain from origin to delivery with real time updates</p>
      <div className='features_boxes'>
        <div className='features_box'>
          <h2>Mobile App</h2>
          <h3>Download</h3>
          <img src={phone} alt="Phone" /> 
        </div>

        <div className='features_box'>
          <p>Privacy and Policy</p> 

          <h3>Secure and Private</h3> 
          <img src={secure} alt="Secure" /> 
        </div>
        <div className='features_box'>
          <h3>Discover about us</h3>
        </div>

         <div className='features_box'>
          <h3>Contact us further</h3>
        </div>
        
      </div>
    </div>
  );
};
export default Features;