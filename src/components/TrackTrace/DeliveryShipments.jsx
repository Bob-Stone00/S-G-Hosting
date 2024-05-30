import React from 'react';
import './styles.css';

const DeliveryShipments = () => {
  return (
    <div className="track-and-tracing-DeliveryShipments-div">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px' }}>
        <h3>Delivery Shipments</h3>
        <img
          src="Images/bx-play.svg"
          alt="Play icon"
          height="20"
          width="20"
          style={{ backgroundColor: 'rgb(178, 178, 255)', borderRadius: '50px', padding: '3px' }}
        />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" /> OrderNo
              </th>
              <th>Category</th>
              <th>Weight</th>
              <th>Arrival</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" /> 456123
              </td>
              <td>Electronics</td>
              <td>4509lb</td>
              <td>May 17</td>
              <td>R450</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" /> 456123
              </td>
              <td>Furniture</td>
              <td>1500lb</td>
              <td>May 18</td>
              <td>R1200</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" /> 456123
              </td>
              <td>Clothing</td>
              <td>500lb</td>
              <td>May 19</td>
              <td>R300</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" /> 456123
              </td>
              <td>Books</td>
              <td>100lb</td>
              <td>May 20</td>
              <td>R150</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" /> 456123
              </td>
              <td>Toys</td>
              <td>200lb</td>
              <td>May 21</td>
              <td>R80</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" /> 456123
              </td>
              <td>Groceries</td>
              <td>1000lb</td>
              <td>May 22</td>
              <td>R600</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryShipments;
