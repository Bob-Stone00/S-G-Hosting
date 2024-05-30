import React, { useState, useEffect } from 'react';
import './styles.css';

const Shipment = ({ standardUser }) => {
  const [shipmentData, setShipmentData] = useState({
    weight: 132000, // in lbs
    pieces: 6,
    readinessPercentage: 1
  });

  useEffect(() => {
    const fetchData = () => {
      // Simulate fetching new data
      const newData = {
        weight: Math.floor(Math.random() * 200000), // Random weight between 0 and 200000 lbs
        pieces: Math.floor(Math.random() * 20) + 1, // Random number of pieces between 1 and 20
        readinessPercentage: Math.floor(Math.random() * 100) + 1 // Random readiness percentage between 1 and 100
      };
      setShipmentData(newData);
    };

    // Fetch new data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const divStyle = standardUser ? { width: '45%' } : {};

  return (
   

    <div className="track-and-tracing-shipment-div" style={divStyle}>
      <div className="track-and-tracing-shipment-div-inner1">
        <h3>Ready For Shipments</h3>
        <img
          src="Images/bx-home-alt-2.svg"
          alt="img"
          style={{ backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px' }}
        />
      </div>

      <div className="track-and-tracing-shipment-div-inner2">
        <h3>{shipmentData.weight.toLocaleString()} kg</h3>
        <div className="track-and-tracing-shipment-div-inner2-inner"></div>
        <h4 style={{ marginRight: '70px' }}>{shipmentData.pieces} pcs</h4>
      </div>

      <hr />

      <div className="track-and-tracing-shipment-div-inner3">
        <h3>Ready For Shipments</h3>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px' }}>
          <img src="Images/bxs-up-arrow-alt.svg" alt="img" height="15" width="15" />
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'blue' }}>{shipmentData.readinessPercentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
