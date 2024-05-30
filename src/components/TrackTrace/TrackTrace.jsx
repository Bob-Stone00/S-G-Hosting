import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Navigation from './Navigation';
import Shipment from './Shipment';
import Transit from './Transit';
import ShipmentPrice from './ShipmentPrice';
import OrderFrequency from './OrderFrequency';
import OrderListDatabase from './OrderListDatabase';
import TrackDelivery from './TrackDelivery';
import MostShipmentGoods from './MostShipmentGoods';
import Transportation from './Transportation';
import DeliveryShipments from './DeliveryShipments';
import ConsumersByCountry from './ConsumersByCountry';
import OrderTracking from './OrderTracking';
import TrackAndTracingOrderTracking2 from './TrackandTracing2';
import Sales from '../../Sales';

function TrackTraceComponent({ userStatus }) {

  

  return (
    <>
      <Shipment standardUser={userStatus === 'standard'}/>
      <Transit standardUser={userStatus === 'standard'}/>
      {userStatus !== 'standard' && <ShipmentPrice />}
      {userStatus !== 'standard' && <OrderFrequency />}
      <OrderListDatabase />
      <TrackDelivery />
      {userStatus !== 'standard' && <MostShipmentGoods />}
      <Transportation standardUser={userStatus === 'standard'}/>
      {userStatus !== 'standard' && <DeliveryShipments />}
      <OrderTracking />
      {userStatus !== 'standard' && <TrackAndTracingOrderTracking2 />}
    </>
  );
}

function TrackTrace() {
  const [userStatus, setUserStatus] = useState('premium');

  const handleUserSelect = (status) => {
    setUserStatus(status);
  };

  return (
    
      <main>
        <Navigation onUserSelect={handleUserSelect} />
        <TrackTraceComponent userStatus={userStatus} />

        <Routes>
          <Route path="/TrackTrace/*" element={<TrackTraceComponent userStatus={userStatus} />} />
          <Route path="/shipment" element={<Shipment />} />
          <Route path="/transit" element={<Transit />} />
          <Route path="/shipment-price" element={<ShipmentPrice />} />
          <Route path="/order-frequency" element={<OrderFrequency />} />
          <Route path="/order-list-database" element={<OrderListDatabase />} />
          <Route path="/track-delivery" element={<TrackDelivery />} />
          <Route path="/most-shipment-goods" element={userStatus !== 'standard' ? <MostShipmentGoods /> : null} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/delivery-shipments" element={userStatus !== 'standard' ? <DeliveryShipments /> : null} />
          <Route path="/consumers-by-country" element={<ConsumersByCountry />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/track-and-tracing-order-tracking2" element={<TrackAndTracingOrderTracking2 />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </main>
   
  );
}

export default TrackTrace;
