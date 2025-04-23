import React from 'react';
import { DashboardLayout, StatCard, IssuesTable } from '../components/dashboard';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div>
        <div className="grid grid-cols-3 gap-6">
          <StatCard title="OPEN ISSUES" value="3/20" color="red" />
          <StatCard title="FIXED ISSUES" value="17/20" color="yellow" />
          <StatCard title="TOTAL ISSUES" value="20/20" color="gray" />
        </div>
        
        <IssuesTable />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;