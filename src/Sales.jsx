import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header.jsx";
import Stock from './components/Stock/Stock.jsx';


function Sales() {
    const [totalCost, setTotalCost] = useState(0);
    const [unfulfilledCount, setUnfulfilledCount] = useState(0);
    const [fulfilledCount, setFulfilledCount] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);

    return (
        <div className="App">
            <Header 
                totalCost={totalCost} 
                unfulfilledCount={unfulfilledCount} 
                fulfilledCount={fulfilledCount} 
                totalOrders={totalOrders} 
            />
            <Stock 
                setTotalCost={setTotalCost} 
                setUnfulfilledCount={setUnfulfilledCount} 
                setFulfilledCount={setFulfilledCount} 
                setTotalOrders={setTotalOrders} 
            />
        </div>
    );
}

export default Sales;
