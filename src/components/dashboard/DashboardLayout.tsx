import React from 'react';
import Sidebar from './Sidebar';
import './styles/_dashboard.scss';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-layout__main">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;