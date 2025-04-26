import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  OnboardingLayout,
  PersonalDetailsStep,
  BusinessDetailsStep,
  ConfirmEmailStep,
  CreatePasswordStep
} from '../components/onboarding';
import { Button, ProgressIndicator } from '../components/common';
import useOnboardingStore, { OnboardingFormData } from '../store/onboardingStore';

const TOTAL_STEPS = 4;

type FormErrors = { [key in keyof OnboardingFormData]?: string };

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentStep, formData, setFormData, nextStep, prevStep } = useOnboardingStore();
  const [errors, setErrors] = useState<FormErrors>({});

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    if (!formData.firstName?.trim()) {
        newErrors.firstName = 'First name is required.';
        isValid = false;
    }
    if (!formData.lastName?.trim()) {
        newErrors.lastName = 'Last name is required.';
        isValid = false;
    }
    if (!formData.email?.trim()) {
        newErrors.email = 'Professional email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email format is invalid.';
        isValid = false;
    }
    if (!formData.phone?.trim()) {
        newErrors.phone = 'Phone number is required.';
        isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    let isStepValid = true;

    if (currentStep === 1) {
      isStepValid = validateStep1();
    }

    if (!isStepValid) {
      return;
    }

    setErrors({});

    if (currentStep === TOTAL_STEPS) {
      console.log('Onboarding finalizado, datos:', formData);
      navigate('/dashboard');
    } else {
      nextStep();
    }
  };

  const handlePrev = () => {
    setErrors({});
    prevStep();
  };

  const updateAndClearError = (field: keyof OnboardingFormData, value: string) => {
    setFormData({ [field]: value });
    if (errors[field]) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetailsStep formData={formData} updateFormData={updateAndClearError} errors={errors} />;
      case 2:
        return <BusinessDetailsStep formData={formData} updateFormData={updateAndClearError} errors={errors} />;
      case 3:
        return <ConfirmEmailStep formData={formData} updateFormData={updateAndClearError} errors={errors} />;
      case 4:
        return <CreatePasswordStep formData={formData} updateFormData={updateAndClearError} errors={errors} />;
      default:
        return <div>Paso desconocido</div>;
    }
  };

  return (
    <OnboardingLayout title="Nuevo usuario">
       <ProgressIndicator totalSteps={TOTAL_STEPS} currentStep={currentStep} />
       <div>
         {renderStepContent()}
       </div>
       <div>
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