import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <DashboardLayout />
    </div>
  );
}

export default App;
