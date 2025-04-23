
import React, { useState } from 'react';
import {
  OnboardingLayout,
  PersonalDetailsStep,
} from '../components/onboarding';
import { Button, ProgressIndicator } from '../components/common'; 

const TOTAL_STEPS = 4;

const OnboardingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  // Add state for form data later
  // const [formData, setFormData] = useState({});

  const handleNext = () => {
    // Add form validation logic here before proceeding
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
        return <PersonalDetailsStep />;
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
    <OnboardingLayout title="Nuevo usuario">
       <ProgressIndicator totalSteps={TOTAL_STEPS} currentStep={currentStep} />
       <div className="min-h-[250px]"> {/* Added min-height for content area */}
         {renderStepContent()}
       </div>
       <div className="mt-6 flex justify-between items-center">
         {currentStep > 1 ? (
           <Button variant="secondary" onClick={handlePrev}>
             Previo
           </Button>
         ) : (
            <div></div> // Placeholder to keep spacing consistent
         )}
         <Button variant="primary" onClick={handleNext}>
           {currentStep === TOTAL_STEPS ? 'Finalizar' : 'Próximo'}
         </Button>
       </div>
    </OnboardingLayout>
  );
};

export default OnboardingPage;