import React from 'react';

interface OnboardingLayoutProps {
  title: string;
  children: React.ReactNode;
}

// Placeholder for Logo - replace with actual SVG or Image component later
const LogoPlaceholder: React.FC = () => (
    <div className="text-center mb-6">
        <span className="text-2xl font-bold text-red-600">CODEFEND</span> {/* Basic text logo */}
    </div>
);


const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
         <LogoPlaceholder />
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">{title}</h2>
        {/* Progress Indicator will be added in OnboardingPage */}
        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;