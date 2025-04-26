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
      newErrors.firstName = 'El nombre es obligatorio.';
      isValid = false;
    }
    if (!formData.lastName?.trim()) {
      newErrors.lastName = 'El apellido es obligatorio.';
      isValid = false;
    }
    if (!formData.email?.trim()) {
      newErrors.email = 'El correo electrónico profesional es obligatorio.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del correo electrónico no es válido.';
      isValid = false;
    }
    if (!formData.phone?.trim()) {
      newErrors.phone = 'El número de teléfono es obligatorio.';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    if (!formData.companyName?.trim()) {
      newErrors.companyName = 'El nombre de la empresa es obligatorio.';
      isValid = false;
    }
    if (!formData.companyWebsite?.trim()) {
      newErrors.companyWebsite = 'El sitio web de la empresa es obligatorio.';
      isValid = false;
    } else {
      try {
        new URL(formData.companyWebsite);
      } catch (_) {
        newErrors.companyWebsite = 'El formato de la URL no es válido.';
        isValid = false;
      }
    }
    if (!formData.companySize?.trim()) {
      newErrors.companySize = 'El tamaño de la empresa es obligatorio.';
      isValid = false;
    }
    if (!formData.languagePreference?.trim()) {
      newErrors.languagePreference = 'La preferencia de idioma es obligatoria.';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const validateStep3 = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.verificationCode?.trim()) {
      newErrors.verificationCode = 'El código de verificación es obligatorio.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep4 = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.password?.trim()) {
      newErrors.password = 'La contraseña es obligatoria.';
      isValid = false;
    } else {
      const hasNumber = /\d/.test(formData.password);
      const hasLetter = /[a-zA-Z]/.test(formData.password);
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
      const isLongEnough = formData.password.length >= 12;

      if (!isLongEnough) {
        newErrors.password = 'La contraseña debe tener al menos 12 caracteres.';
        isValid = false;
      } else if (!(hasNumber && hasLetter && hasSymbol)) {
        newErrors.password = 'La contraseña debe contener al menos un número, una letra y un símbolo.';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    let isStepValid = true;

    if (currentStep === 1) {
      isStepValid = validateStep1();
    } else if (currentStep === 2) {
      isStepValid = validateStep2();
    } else if (currentStep === 3) {
      isStepValid = validateStep3();
    } else if (currentStep === 4) {
      isStepValid = validateStep4();
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
            Anterior
          </Button>
        ) : (
          <div></div>
        )}
        <Button variant="primary" onClick={handleNext}>
          {currentStep === TOTAL_STEPS ? 'Finalizar' : 'Siguiente'}
        </Button>
      </div>
    </OnboardingLayout>
  );
};

export default OnboardingPage;