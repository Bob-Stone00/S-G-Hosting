import React, { useState, useEffect } from 'react';
import './styles.css';

const ShipmentPrice = () => {
  const [product, setProduct] = useState('Machines');
  const [from, setFrom] = useState('America');
  const [to, setTo] = useState('America');
  const [weight, setWeight] = useState(450);
  const [price, setPrice] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'product':
        setProduct(value);
        break;
      case 'from':
        setFrom(value);
        break;
      case 'to':
        setTo(value);
        break;
      case 'weight':
        setWeight(Number(value.replace('lbs', '')));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Calculate price based on product, from, to, and weight
    const basePrice = 100; // Base price in dollars
    const distanceMultiplier = from === to ? 1 : 1.5; // Example multiplier based on distance
    const productMultiplier = product === 'Machines' ? 1.2 : 1.0; // Example multiplier based on product type
    const calculatedPrice = basePrice * distanceMultiplier * productMultiplier * (weight / 100);
    setPrice(calculatedPrice.toFixed(2)); // Set price with 2 decimal places
  }, [product, from, to, weight]);

  return (
    <div className="track-and-tracing-shipmentPrice-div">
      <h3>Set Shipment Price</h3>
      <div className="track-and-tracing-shipmentPrice-div-inner2">
        <div>
          <p>Product</p>
          <select name="product" value={product} onChange={handleChange}>
            <option value="Machines">Machines</option>
            <option value="Electronics">Electronics</option>
            <option value="Gym">Gym</option>
            <option value="Food">Food</option>
          </select>
        </div>
        <div>
          <p>From</p>
          <select name="from" value={from} onChange={handleChange}>
            <option value="America">America</option>
            <option value="South Africa">South Africa</option>
            <option value="England">England</option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <div>
          <p>To</p>
          <select name="to" value={to} onChange={handleChange}>
            <option value="America">America</option>
            <option value="South Africa">South Africa</option>
            <option value="England">England</option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <div>
          <p>Weight (Kg)</p>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={handleChange}
            min="1"
            step="1"
          />
        </div>
      </div>
      <div className="track-and-tracing-shipmentPrice-div-price">
        <h4>Calculated Price: R{price}</h4>
      </div>
    </div>
  );
};

export default ShipmentPrice;
