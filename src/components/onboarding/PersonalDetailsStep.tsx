import React from 'react';
import { InputField, PhoneInputField } from '../common';
import { OnboardingFormData } from '../../store/onboardingStore';
import './styles/_onboarding-steps.scss';

interface PersonalDetailsStepProps {
  formData: OnboardingFormData;
  updateFormData: (field: keyof OnboardingFormData, value: string) => void;
  errors: { [key in keyof OnboardingFormData]?: string };
}

const PersonalDetailsStep: React.FC<PersonalDetailsStepProps> = ({ formData, updateFormData, errors }) => {
  return (
    <div className="onboarding-step">
      <p className="onboarding-step__description">
        Bienvenido. Codefend es una plataforma completa para pentest continuo, detección temprana de amenazas, y protección de assets e infraestructura, empleando una red de hackers decentralizada especializados en diversas áreas.
      </p>
      <h2 className="onboarding-step__subtitle">Personal details:</h2>

      <div className="onboarding-step__form">
        <InputField
          label="First name"
          id="firstName"
          value={formData.firstName ?? ''}
          onChange={(e) => updateFormData('firstName', e.target.value)}
          placeholder="Enter your first name"
          className="onboarding-input"
          labelClassName="onboarding-label"
          error={errors?.firstName}
        />
        <InputField
          label="Last name"
          id="lastName"
          value={formData.lastName ?? ''}
          onChange={(e) => updateFormData('lastName', e.target.value)}
          placeholder="Enter your last name"
          className="onboarding-input"
          labelClassName="onboarding-label"
          error={errors?.lastName}
        />
        <InputField
          label="Professional email"
          id="email"
          type="email"
          value={formData.email ?? ''}
          onChange={(e) => updateFormData('email', e.target.value)}
          placeholder="Enter your professional email"
          className="onboarding-input"
          labelClassName="onboarding-label"
          error={errors?.email}
        />
        <PhoneInputField
          label="Phone number"
          id="phone"
          value={formData.phone ?? ''}
          onChange={(value: string) => updateFormData('phone', value)}
          defaultCountryCode="+54"
          className="onboarding-input"
          labelClassName="onboarding-label"
          error={errors?.phone}
        />
      </div>
    </div>
  );
}

export default PersonalDetailsStep;