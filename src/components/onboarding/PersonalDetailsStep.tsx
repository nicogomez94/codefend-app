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
        Bienvenido. Codefend es una plataforma completa para pentest continuo, detección temprana de amenazas y protección de activos e infraestructura, empleando una red descentralizada de hackers especializados en diversas áreas.
      </p>
      <h2 className="onboarding-step__subtitle">Detalles personales:</h2>

      <div className="onboarding-step__form">
        <InputField
          label="Nombre"
          id="firstName"
          value={formData.firstName ?? ''}
          onChange={(e) => updateFormData('firstName', e.target.value)}
          placeholder="Ingrese su nombre"
          className="onboarding-input"
          labelClassName="onboarding-label"
          error={errors?.firstName}
        />
        <InputField
          label="Apellido"
          id="lastName"
          value={formData.lastName ?? ''}
          onChange={(e) => updateFormData('lastName', e.target.value)}
          placeholder="Ingrese su apellido"
          className="onboarding-input"
          labelClassName="onboarding-label"
          error={errors?.lastName}
        />
        <InputField
          label="Correo electrónico profesional"
          id="email"
          type="email"
          value={formData.email ?? ''}
          onChange={(e) => updateFormData('email', e.target.value)}
          placeholder="Ingrese su correo electrónico profesional"
          className="onboarding-input"
          labelClassName="onboarding-label"
          error={errors?.email}
        />
        <PhoneInputField
          label="Número de teléfono"
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