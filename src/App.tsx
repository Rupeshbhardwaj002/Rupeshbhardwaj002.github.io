import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import Home from './pages/Home';
import MLOpsProject from './pages/MLOpsProject';
import FootfallCounter from './pages/FootfallCounter';
import HybridRAGProject from './pages/HybridRAGProject';
import VehicleInsuranceProject from './pages/VehicleInsuranceProject';
import TcsStockProject from './pages/TcsStockProject';
import WarpIntro from './components/WarpIntro';

function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <Router>
      <ScrollToTop />
      {showIntro && <WarpIntro onComplete={handleIntroComplete} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/tcs-stock-prediction" element={<TcsStockProject />} />
        <Route path="/project/mlops-capstone" element={<MLOpsProject />} />
        <Route path="/project/footfall-counter" element={<FootfallCounter />} />
        <Route path="/project/hybrid-rag" element={<HybridRAGProject />} />
        <Route path="/project/vehicle-insurance" element={<VehicleInsuranceProject />} />
      </Routes>
    </Router>
  );
}
