import React from 'react';

const Sidebar = () => {
  return (
    <div className="hidden md:block w-64 h-screen bg-white shadow-lg p-6 border-r border-blue-100">
      <h2 className="text-2xl font-bold text-[#0D47A1] mb-10 tracking-tight">Client Tracker</h2>
      <nav>
        <ul className="space-y-4">
          <li className="text-[#0D47A1] font-medium hover:text-blue-600 transition cursor-pointer">
            Dashboard
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
