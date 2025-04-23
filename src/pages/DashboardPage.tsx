import React, { useState } from 'react';
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
import OnboardStep1 from '../components/onboard/OnboardStep1';

const DashboardPage: React.FC = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleNextOnboard = () => {
    setShowOnboard(false);
    console.log("Ir al siguiente paso del onboarding");
  };

  const handleGoToDashboard = () => {
    setShowOnboard(false);
    console.log("Ir directamente al dashboard");
  };

  return (
    <DashboardLayout>
      {showOnboard && (
        <OnboardStep1
          onNext={handleNextOnboard}
          onGoToDashboard={handleGoToDashboard}
        />
      )}

      <TopBar />

      <div className="dashboard__grid">
        <StatCard title="OPEN ISSUES" value="0" color="red" />
        <StatCard title="FIXED ISSUES" value="0" color="blue" />
        <StatCard title="TOTAL ISSUES" value="0" color="gray" />
      </div>

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

      <div className="dashboard__grid dashboard__grid--half">
        <RiskLevelChart />
        <ScanProgressSection />
      </div>

      <div className="dashboard__container">
        <TeamSection />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;