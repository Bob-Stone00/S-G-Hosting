import React from 'react';
import './styles.css';

const MostShipmentGoods = () => {
  return (
    <div className="track-and-tracing-MostShipmentGoods-div">
      <h3>Most Shipment Goods</h3>
      <div>
        
        <div style={{ display: 'flex', fontSize: '0.7rem', margin: '0', justifyContent: 'space-around', gap: '50px' }}>
          <p>Industrial Equipment</p>
          <p>1200lbs</p>
        </div>
          <div className="track-and-tracing-MostShipmentGoods-div-inner3">
                <div className="tracktracingper">
                </div>
        </div>
        
       
         {/* Added class */}
          <div style={{ display: 'flex', fontSize: '0.7rem', margin: '0', justifyContent: 'space-around', gap: '50px' }}>
            <p>Fish & Poultry</p>
            <p>1800lbs</p>
        </div>
            <div className="track-and-tracing-MostShipmentGoods-div-inner3">
            <div className="tracktracingper1"></div> {/* Placeholder for progress bar */}
            </div>
          
       
        
          <div style={{ display: 'flex', fontSize: '0.7rem', margin: '0', justifyContent: 'space-around', gap: '50px' }}>
            <p>Jute Products</p>
            <p>1000lbs</p>
        </div>

            <div className="track-and-tracing-MostShipmentGoods-div-inner3"> {/* Added class */}
            <div className="tracktracingper2"></div> {/* Placeholder for progress bar */}
            </div>
          
        
        
          <div style={{ display: 'flex', fontSize: '0.7rem', margin: '0', justifyContent: 'space-around', gap: '50px' }}>
            <p>Palm Oil Products</p>
            <p>500lbs</p>
            </div>
            
            <div className="track-and-tracing-MostShipmentGoods-div-inner3"> {/* Added class */}
            <div className="tracktracingper3"></div> {/* Placeholder for progress bar */}
            </div>
       
      </div>
    </div>
  );
};

export default MostShipmentGoods;
