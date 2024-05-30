import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const users = [
  { name: 'Ecom', status: 'Manufacturer', avatar: 'Images/download.jpg' },
  { name: 'Tumi', status: 'standard', avatar: 'Images/download.jpg' },
  { name: 'Max', status: 'premium', avatar: 'Images/download3.jpg' }
];

const Navigation = ({ onUserSelect }) => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectUser = (user) => {
    setSelectedUser(user);
    onUserSelect(user.status);
    setIsDropdownOpen(false);
  };

  return (
    <div className="track-and-tracing-navigation-div">
      <div className="track-and-tracing-navigation-div-inner1">
        <h3>S&C</h3>
      </div>

      <div className="track-and-tracing-navigation-div-inner2">
        <ul>
          <li>
            <button><Link to="/sales">Sales Activity</Link></button>
          </li>
          <li>
            <button>Tracking List</button>
          </li>
          <li>
            <button>Services</button>
          </li>
          <li>
            <button>My Orders</button>
          </li>
          <li className="dropdown">
            <button className="user-btn" onClick={toggleDropdown}>
              <div style={{ display: 'flex', justifyContent: 'space-around', objectFit: 'cover' }}>
                <img src={selectedUser.avatar} alt="User Avatar" height="20" width="20" style={{ borderRadius: '20px' }} />
                <div>
                  <h4 style={{ margin: 0 }}>{selectedUser.name}</h4>
                  <p style={{ margin: 0, fontSize: '0.5rem' }}>{selectedUser.status}</p>
                </div>
                <img src="Images/bx-star.svg" alt="Star Icon" height="20" width="20" />
              </div>
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                {users.map((user) => (
                  <li key={user.name} onClick={() => selectUser(user)} className="dropdown-item">
                    <div style={{ display: 'flex', justifyContent: 'space-around', objectFit: 'cover' }}>
                      <img src={user.avatar} alt="User Avatar" height="20" width="20" style={{ borderRadius: '20px' }} />
                      <div>
                        <h4 style={{ margin: 0 }}>{user.name}</h4>
                        <p style={{ margin: 0, fontSize: '0.5rem' }}>{user.status}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      

      <div className="track-and-tracing-navigation-div-inner3">
        <img src="Images/bx-wifi-2.svg" alt="wifi" height="30" width="30" />
        <img src="Images/bx-menu (1).svg" alt="menu" height="30" width="30" style={{ backgroundColor: 'black' }} />
      </div>
    </div>
  );
};

export default Navigation;
