import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import DepartmentDetail from './pages/DepartmentDetail';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bidang/:departmentId" element={<DepartmentDetail />} />
      </Routes>
    </div>
  );
}

export default App;