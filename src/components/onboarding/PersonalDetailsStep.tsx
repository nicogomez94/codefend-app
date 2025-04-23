import React from 'react';
import { Input } from '../common';
import type { OnboardingFormData } from '../../store/onboardingStore'; // Importa el tipo

interface PersonalDetailsStepProps {
  // Usa el tipo importado aquí
  formData: Partial<Pick<OnboardingFormData, 'firstName' | 'lastName' | 'email' | 'phone'>>;
  // Actualiza el tipo del primer argumento 'field'
  updateFormData: (field: keyof OnboardingFormData, value: string) => void;
}

const PersonalDetailsStep: React.FC<PersonalDetailsStepProps> = ({ formData, updateFormData }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData(e.target.name as keyof OnboardingFormData, e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <p className="text-sm text-gray-600 mb-4">
        Bienvenido. Codefend es una plataforma completa para pentest continuo, detección temprana de amenazas, y protección de assets e infrastructura, empleando una red de hackers decentralizada especializados en diversas áreas.
      </p>
      <h3 className="text-md font-semibold text-gray-700 mb-3">Personal details:</h3>
      <Input
        id="firstName"
        name="firstName"
        label="First name"
        placeholder="Enter your first name"
        value={formData.firstName || ''}
        onChange={handleChange}
        required
      />
      <Input
        id="lastName"
        name="lastName"
        label="Last name"
        placeholder="Enter your last name"
        value={formData.lastName || ''}
        onChange={handleChange}
        required
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="Professional email"
        placeholder="Enter your professional email"
        value={formData.email || ''}
        onChange={handleChange}
        required
      />
      <Input
        id="phone"
        name="phone"
        type="tel"
        label="Phone number"
        placeholder="+54 ..."
        value={formData.phone || ''}
        onChange={handleChange}
        required
      />
    </form>
  );
};

export default PersonalDetailsStep;