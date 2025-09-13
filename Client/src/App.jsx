import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import "./App.css";
import {Routes,Route} from 'react-router-dom';
import Login from './vendorDashboard/components/forms/Login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
      </Routes>
    </div>
  )
}

export default App