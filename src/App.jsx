import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import TrackTrace from "./components/TrackTrace/TrackTrace";
import Sales from './Sales';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/TrackTrace/*" element={<TrackTrace/>} />
        <Route path="/sales" element={<Sales/>}/>

      </Routes>
    </div>
  );
}

export default App;
