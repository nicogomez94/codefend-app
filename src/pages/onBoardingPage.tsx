// filepath: c:\Users\nicol\github\codefend-nico\codefend-test\src\pages\OnboardingPage.tsx
import React, { useState } from 'react';
// We'll create these components in the next steps
// import OnboardingLayout from '../components/onboarding/OnboardingLayout';
// import PersonalDetailsStep from '../components/onboarding/PersonalDetailsStep';
// import BusinessDetailsStep from '../components/onboarding/BusinessDetailsStep';
// import ConfirmEmailStep from '../components/onboarding/ConfirmEmailStep';
// import CreatePasswordStep from '../components/onboarding/CreatePasswordStep';

const TOTAL_STEPS = 4;

const OnboardingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Handle final submission logic here
      console.log('Onboarding finished');
      // Navigate to dashboard, potentially
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        // return <PersonalDetailsStep />;
        return <div>Step 1: Personal Details Form Placeholder</div>;
      case 2:
        // return <BusinessDetailsStep />;
        return <div>Step 2: Business Details Form Placeholder</div>;
      case 3:
        // return <ConfirmEmailStep />;
        return <div>Step 3: Confirm Email Placeholder</div>;
      case 4:
        // return <CreatePasswordStep />;
        return <div>Step 4: Create Password Form Placeholder</div>;
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <div> {/* Replace this div with OnboardingLayout later */}
      <h1>Nuevo Usuario (Step {currentStep}/{TOTAL_STEPS})</h1>
      {/* Progress indicator will go here */}
      <div>
        {renderStepContent()}
      </div>
      <div>
        {currentStep > 1 && (
          <button onClick={handlePrev}>Previo</button> // Replace with Button component
        )}
        <button onClick={handleNext}>
          {currentStep === TOTAL_STEPS ? 'Finalizar' : 'Próximo'}
        </button> {/* Replace with Button component */}
      </div>
    </div>
  );
};

export default OnboardingPage;