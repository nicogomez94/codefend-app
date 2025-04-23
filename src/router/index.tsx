// filepath: c:\Users\nicol\github\codefend-nico\codefend-test\src\router\index.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OnboardingPage } from '../pages';
// Import DashboardPage later
// import { DashboardPage } from '../pages';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route to onboarding */}
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        {/* Add dashboard route later */}
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;