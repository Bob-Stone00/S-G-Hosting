import React, { useState, useEffect } from 'react';
import './styles.css';

const Transportation = ({standardUser}) => {
  // State to hold transportation data
  const [transportationData, setTransportationData] = useState({
    payload: 'Loading...',
    loadVolume: 'Loading...',
    loadLength: 'Loading...',
    imageUrl: 'Images/R.png' // Default image URL
  });

  // Function to simulate fetching transportation data
  const fetchTransportationData = () => {
    // Simulating delay to mimic API call
    setTimeout(() => {
      // Mock transportation data
      const mockData = {
        payload: '234 kgs',
        loadVolume: '234ln',
        loadLength: '234In',
        imageUrl: 'Images/R.png'
      };
      setTransportationData(mockData);
    }, 5000); // Simulate a 1-second delay
  };

  // Fetch transportation data when the component mounts
  useEffect(() => {
    fetchTransportationData();
  }, []);

  const divStyle = standardUser ? { width: '70%' } : {};

  return (
    <div className="track-and-tracing-Transportation-div" style={divStyle}>
      <div className="track-and-tracing-Transportation-div-inner1">
        <h3>S&C Transportation</h3>
        <img
          src="Images/bx-border-all.svg"
          alt="Border icon"
          height="20"
          width="20"
          style={{ backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px', marginTop: '5px' }}
        />
      </div>
      <div>
        <div className="track-and-tracing-Transportation-div-inner">
          <h4>PayLoad</h4>
          <h3>{transportationData.payload}</h3>
          <h4>LoadVolume</h4>
          <h3>{transportationData.loadVolume}</h3>
          <h4>LoadLength</h4>
          <h3>{transportationData.loadLength}</h3>
        </div>
        <div>
          <img src={transportationData.imageUrl} alt="Image" height="200px" width="220px" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

export default Transportation;
