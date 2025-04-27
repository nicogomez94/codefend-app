import React from 'react';
import './styles/_onboarding-layout.scss';

interface OnboardingLayoutProps {
  title: string;
  children: React.ReactNode;
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ title, children }) => {
  return (
    <div className="onboarding-layout">
      <div className="onboarding-layout__card">
        <div className="onboarding-layout__logo">
          <p>CODEFEND</p>
        </div>
        <h1 className="onboarding-layout__title">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default OnboardingLayout;