import React from 'react';
import {
  DashboardLayout,
  StatCard,
  ResourceCard,
  AddResourcesSection,
  ScanProgressSection,
  RiskLevelChart,
  TeamSection,
  TopBar
} from '../components/dashboard';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <TopBar />
      
      {/* Stats Row */}
      <div className="dashboard__grid">
        <StatCard title="OPEN ISSUES" value="0" color="red" />
        <StatCard title="FIXED ISSUES" value="0" color="blue" />
        <StatCard title="TOTAL ISSUES" value="0" color="gray" />
      </div>
      
      {/* Resources Row */}
      <div className="dashboard__grid dashboard__grid--resources">
        <ResourceCard count={1} label="WEB APPS / SITES" />
        <ResourceCard count={0} label="MOBILE APPS" />
        <ResourceCard count={0} label="NETWORK ASSETS" />
      </div>
      
      <div className="dashboard__grid dashboard__grid--resources">
        <ResourceCard count={0} label="CLOUD ASSETS" />
        <ResourceCard count={0} label="SOURCE CODE" />
        <ResourceCard count={0} label="SOCIAL ASSETS" />
        <AddResourcesSection />
      </div>
      
      {/* Risk and Scan Row */}
      <div className="dashboard__grid dashboard__grid--half">
        <RiskLevelChart />
        <ScanProgressSection />
      </div>
      
      {/* Team Section */}
      <div className="dashboard__container">
        <TeamSection />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;