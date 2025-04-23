import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  OnboardingLayout,
  PersonalDetailsStep,
  BusinessDetailsStep,
  ConfirmEmailStep,
  CreatePasswordStep
} from '../components/onboarding';
import { Button, ProgressIndicator } from '../components/common';
import useOnboardingStore from '../store/onboardingStore';

const TOTAL_STEPS = 4;

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentStep, formData, setFormData, nextStep, prevStep } = useOnboardingStore();

  const handleNext = () => {
    if (currentStep === TOTAL_STEPS) {
      console.log('Onboarding finalizado, datos:', formData);
      // Redirigir al dashboard
      navigate('/dashboard');
    } else {
      nextStep();
    }
  };

  const handlePrev = () => {
    prevStep();
  };

  const updateFormData = (field: keyof typeof formData, value: string) => {
    setFormData({ [field]: value });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetailsStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <BusinessDetailsStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <ConfirmEmailStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <CreatePasswordStep formData={formData} updateFormData={updateFormData} />;
      default:
        return <div>Paso desconocido</div>;
    }
  };

  return (
    <OnboardingLayout title="Nuevo usuario">
       <ProgressIndicator totalSteps={TOTAL_STEPS} currentStep={currentStep} />
       <div className="min-h-[300px]">
         {renderStepContent()}
       </div>
       <div className="mt-8 flex justify-between items-center">
         {currentStep > 1 ? (
           <Button variant="secondary" onClick={handlePrev}>
             Previo
           </Button>
         ) : (
            <div></div>
         )}
         <Button variant="primary" onClick={handleNext}>
           {currentStep === TOTAL_STEPS ? 'Finalizar' : 'Próximo'}
         </Button>
       </div>
    </OnboardingLayout>
  );
};

export default OnboardingPage;