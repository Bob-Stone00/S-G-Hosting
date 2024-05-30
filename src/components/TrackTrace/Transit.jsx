import React, { useState, useEffect } from 'react';
import './styles.css';

const Transit = ({standardUser}) => {
  const [transitData, setTransitData] = useState(null);

  // Simulate fetching data from an API
  useEffect(() => {
    // Simulated initial API response
    const initialTransitData = {
      avgTransitTime: {
        byAir: '2 days',
        byShip: '5 days'
      },
      lastWeekCount: 80000,
      percentageChange: 9
    };

    setTransitData(initialTransitData);

    // Simulate periodic updates to transit data
    const updateInterval = setInterval(() => {
      // Randomly update transit data
      const updatedTransitData = {
        avgTransitTime: {
          byAir: Math.floor(Math.random() * 5) + 2 + ' days',
          byShip: Math.floor(Math.random() * 5) + 5 + ' days'
        },
        lastWeekCount: Math.floor(Math.random() * 100000) + 70000,
        percentageChange: Math.floor(Math.random() * 20) - 10
      };

      setTransitData(updatedTransitData);
    }, 5000); // Update every 5 seconds

    // Cleanup function to clear interval
    return () => clearInterval(updateInterval);
  }, []);

  const divStyle = standardUser ? { width: '45%' } : {};

  return (
    <div className="track-and-tracing-Transit-div" style={divStyle}>
      {transitData && (
        <>
          <div className="track-and-tracing-shipment-div-inner1">
            <h3>Avg. Transit Time</h3>
            <img
              src="Images/bx-time-five (1).svg"
              alt="img"
              style={{ backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px' }}
            />
          </div>

          <div className="track-and-tracing-shipment-div-inner2">
            <h3>{transitData.avgTransitTime.byAir}<sub style={{ fontSize: '0.9rem' }}>/by air</sub></h3>
            <div className="track-and-tracing-shipment-div-inner2-inner"></div>
            <h3>{transitData.avgTransitTime.byShip}<sub style={{ fontSize: '0.9rem' }}>/by ship</sub></h3>
          </div>

          <hr />

          <div className="track-and-tracing-shipment-div-inner3">
            <h3>Last Week {transitData.lastWeekCount}</h3>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '3px' }}>
              {transitData.percentageChange > 0 ? (
                <img src="Images/bxs-up-arrow-alt.svg" alt="img" height="15" width="15" />
              ) : (
                <img src="Images/bx-down-arrow-alt.svg" alt="img" height="15" width="15" />
              )}
              <p style={{ margin: 0, fontSize: '0.8rem', color: transitData.percentageChange > 0 ? 'blue' : 'red' }}>{transitData.percentageChange}%</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Transit;
