
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 space-y-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
