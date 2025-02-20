import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './Main';  
import LandlinePage from './LandlinePage';
import VoltmeterPage from './VoltmeterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/landline" element={<LandlinePage />} />
        <Route path="/voltmeter" element={<VoltmeterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
