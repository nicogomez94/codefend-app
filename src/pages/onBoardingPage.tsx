import React from 'react';
import {
  OnboardingLayout,
  PersonalDetailsStep,
  BusinessDetailsStep, // Importar el nuevo componente
} from '../components/onboarding';
import { Button, ProgressIndicator } from '../components/common'; // Importar desde el índice principal
import useOnboardingStore from '../store/onboardingStore'; // Importar el store

const TOTAL_STEPS = 4; // Asegúrate que coincida con el store

const OnboardingPage: React.FC = () => {
  // Usar el estado y las acciones del store
  const { currentStep, formData, setFormData, nextStep, prevStep } = useOnboardingStore();

  const handleNext = () => {
    // Añadir validación si es necesario antes de llamar a nextStep()
    if (currentStep === TOTAL_STEPS) {
      console.log('Onboarding finished, data:', formData);
      // Lógica de envío final, navegar al dashboard...
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
        // Usar el componente real
        return <BusinessDetailsStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        // return <ConfirmEmailStep formData={formData} updateFormData={updateFormData} />;
        return <div>Step 3: Confirm Email Placeholder</div>;
      case 4:
        return <div>Step 4: Create Password Form Placeholder</div>;
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <OnboardingLayout title="Nuevo usuario">
       <ProgressIndicator totalSteps={TOTAL_STEPS} currentStep={currentStep} />
       <div className="min-h-[250px]">
         {renderStepContent()}
       </div>
       <div className="mt-6 flex justify-between items-center">
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