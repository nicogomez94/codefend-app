import React from 'react';
import { InputField } from '../common';
import { OnboardingFormData } from '../../store/onboardingStore';
import './styles/_onboarding-steps.scss';

interface BusinessDetailsStepProps {
  formData: OnboardingFormData;
  updateFormData: (field: keyof OnboardingFormData, value: string) => void;
}

const BusinessDetailsStep: React.FC<BusinessDetailsStepProps> = ({ formData, updateFormData }) => {
  return (
    <div className="onboarding-step">
      <p className="onboarding-step__description">
        Vamos a intentar de hackearte lo antes posible. Conducimos toda clase de pruebas sobre la superficie de tu empresa, desde pentest convencional, hasta detección de dataleaks, técnicas sociales avanzadas y más...
      </p>
      <h2 className="onboarding-step__subtitle">Business details:</h2>

      <div className="onboarding-step__form">
        <InputField
          label="Nombre de la empresa"
          id="companyName"
          value={formData.companyName ?? ''}
          onChange={(e) => updateFormData('companyName', e.target.value)}
          placeholder="Enter company name"
          className="onboarding-input"
          labelClassName="onboarding-label"
        />
        <InputField
          label="Web de la empresa"
          id="companyWebsite"
          type="url"
          value={formData.companyWebsite ?? ''}
          onChange={(e) => updateFormData('companyWebsite', e.target.value)}
          placeholder="https://example.com"
          className="onboarding-input"
          labelClassName="onboarding-label"
        />
        <InputField
          label="Tamaño de la empresa"
          id="companySize"
          value={formData.companySize ?? ''}
          onChange={(e) => updateFormData('companySize', e.target.value)}
          placeholder="e.g., 1-10, 11-50"
          className="onboarding-input"
          labelClassName="onboarding-label"
        />
        <InputField
          label="Preferencia de idioma"
          id="languagePreference"
          value={formData.languagePreference ?? ''}
          onChange={(e) => updateFormData('languagePreference', e.target.value)}
          placeholder="e.g., Español, English"
          className="onboarding-input"
          labelClassName="onboarding-label"
        />
      </div>
    </div>
  );
};

export default BusinessDetailsStep;