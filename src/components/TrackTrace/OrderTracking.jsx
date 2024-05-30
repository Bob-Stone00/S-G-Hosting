import React, { useState, useEffect } from 'react';
import './styles.css';

const OrderTracking = () => {
  // State to track the progress of each step
  const [progress, setProgress] = useState({
    ordered: false,
    outOfFactory: false,
    shipped: false,
    onTransit: false,
    delivered: false
  });

  // Function to simulate progress update
  const simulateProgress = (step, time) => {
    setTimeout(() => {
      setProgress(prevProgress => ({
        ...prevProgress,
        [step]: true
      }));
    }, time);
  };

  // Simulate the progress
  useEffect(() => {
    // Simulate ordered status
    simulateProgress('ordered', 1000);

    // Simulate out of factory status after 2 seconds
    simulateProgress('outOfFactory', 2000);

    // Simulate shipped status after 4 seconds
    simulateProgress('shipped', 4000);

    // Simulate on transit status after 6 seconds
    simulateProgress('onTransit', 6000);

    // Simulate delivered status after 8 seconds
    simulateProgress('delivered', 8000);
  }, []);

  return (
    <div className="track-and-tracing-ordertrackin-div">
      <h3 style={{ marginLeft: '30px', color: 'gray' }}>Shipment Progress</h3>
      <div className="row">
        <div className="col-12 col-md-10 hh-grayBox pt45 pb20">
          <div className="row justify-content-between">
            <div className={`order-tracking ${progress.ordered ? 'completed' : ''}`}>
              <span className="is-complete"></span>
              <p>Ordered<br /><span>Mon, May 24</span></p>
            </div>
            <div className={`order-tracking ${progress.outOfFactory ? 'completed' : ''}`}>
              <span className="is-complete"></span>
              <p>Out of Factory<br /><span>Tue, May 25</span></p>
            </div>
            <div className={`order-tracking ${progress.shipped ? 'completed' : ''}`}>
              <span className="is-complete"></span>
              <p>Shipped<br /><span>Fri, May 28</span></p>
            </div>
            <div className={`order-tracking ${progress.onTransit ? 'completed' : ''}`}>
              <span className="is-complete"></span>
              <p>On Transit<br /><span>Fri, May 31</span></p>
            </div>
            <div className={`order-tracking ${progress.delivered ? 'completed' : ''}`}>
              <span className="is-complete"></span>
              <p>Delivered<br /><span>Fri, June 2</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
