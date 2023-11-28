import './App.css';
import Main from './pages/mainPage/Main'; 
import MapPage from './pages/map/MapPage';
import LoginPage from './pages/initialPage/LoginPage';
import Statistics from './pages/statisticsPage/StatisticsPage'
import ComplaintDetail from './pages/detail/ComplaintDetail'; 
import CleaningPage from './pages/clean/CleaningPage'
import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route exact path='/' element={<Main />} />  
        <Route exact path='/:id' element={<ComplaintDetail />} />  
        <Route path="/mapPage" element={<MapPage />} />
        <Route path="/Login" element={<LoginPage />} /> 
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/cleaning" element={<CleaningPage/>}/> 
        <Route path="/*" element={<div>404 ERROR</div>} /> 
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
