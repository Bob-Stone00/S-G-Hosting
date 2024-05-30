import React, { useEffect, useRef } from 'react'; // Import useRef and useEffect
import './styles.css';

const TrackDelivery = () => {
  const mapContainerRef = useRef(null); // Reference to the map container

  useEffect(() => {
    // Initialize Leaflet map
    let map = L.map(mapContainerRef.current).setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add your delivery location marker here
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('Your Order')
      .openPopup();

    // Add logic for displaying your delivery route if needed

    return () => {
      // Cleanup function to remove map instance when the component unmounts
      map.remove();
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="track-and-tracing-TrackDelivery-div">
      <div id="map" ref={mapContainerRef} style={{ height: '250px' }} />
    </div>
  );
};

export default TrackDelivery;
