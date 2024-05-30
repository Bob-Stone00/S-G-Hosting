import React from 'react';
import './styles.css';

const OrderFrequency = () => {
  return (
    <div className="track-and-tracing-OrderFrequency-div">
      <div className="track-and-tracing-OrderFrequency-div-inner1">
        <div>
          <h3>Order Frequency</h3>
          <h5>Friday 10 May 2024</h5>
        </div>
        <div>
          <img
            src="Images/bx-play.svg"
            alt="img"
            style={{ backgroundColor: 'rgb(178, 178, 255)', borderRadius: '20px', padding: '8px' }}
          />
        </div>
      </div>

      <div className="track-and-tracing-OrderFrequency-div-inner2">
        <div>
          <h5>Mon</h5>
          <div className="track-and-tracing-OrderFrequency-div-inner2-2" style={{ backgroundColor: 'black' }}>
            <p style={{ color: 'white' }}>11</p>
          </div>
        </div>

        <div>
          <h5>Tue</h5>
          <div className="track-and-tracing-OrderFrequency-div-inner2-2">
            <p>12</p>
          </div>
        </div>

        <div>
          <h5>Wed</h5>
          <div className="track-and-tracing-OrderFrequency-div-inner2-2">
            <p>13</p>
          </div>
        </div>

        <div>
          <h5>Thur</h5>
          <div className="track-and-tracing-OrderFrequency-div-inner2-2">
            <p>14</p>
          </div>
        </div>

        <div>
          <h5>Fri</h5>
          <div className="track-and-tracing-OrderFrequency-div-inner2-2">
            <p>15</p>
          </div>
        </div>

        <div>
          <h5>Sat</h5>
          <div
            className="track-and-tracing-OrderFrequency-div-inner2-2"
            style={{ backgroundColor: 'blueviolet' }}
          >
            <p style={{ color: 'white' }}>16</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '18px' }}>
              <img src="Images/download.jpg" alt="User Avatar" height="20" width="20" style={{ borderRadius: '20px', border: '1px solid white' }} />
              <img src="Images/OIP.jpg" alt="Image" height="20" width="20" style={{ borderRadius: '20px', border: '1px solid white' }} />
            </div>
          </div>
        </div>

        <div>
          <h5>Sun</h5>
          <div className="track-and-tracing-OrderFrequency-div-inner2-2">
            <p>17</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFrequency;
