import React from 'react';
import { Input } from '../common';
import type { OnboardingFormData } from '../../store/onboardingStore'; // Importa el tipo

interface BusinessDetailsStepProps {
    // Usa el tipo importado aquí
    formData: Partial<Pick<OnboardingFormData, 'companyName' | 'companyWebsite' | 'companySize' | 'languagePreference'>>;
    // Actualiza el tipo del primer argumento 'field'
    updateFormData: (field: keyof OnboardingFormData, value: string) => void;
}

const BusinessDetailsStep: React.FC<BusinessDetailsStepProps> = ({ formData, updateFormData }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { // Añadir Select si usas uno
    updateFormData(e.target.name as keyof OnboardingFormData, e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <p className="text-sm text-gray-600 mb-4">
        Vamos a intentar de hackearte lo antes posible. Conducimos toda clase de pruebas...
      </p>
      <h3 className="text-md font-semibold text-gray-700 mb-3">Business details:</h3>
      <Input
        id="companyName"
        name="companyName"
        label="Nombre de la empresa"
        placeholder="Enter company name"
        value={formData.companyName || ''}
        onChange={handleChange}
        required
      />
      <Input
        id="companyWebsite"
        name="companyWebsite"
        type="url"
        label="Web de la empresa"
        placeholder="https://example.com"
        value={formData.companyWebsite || ''}
        onChange={handleChange}
        required
      />
      {/* Considerar usar un <select> para tamaño y preferencia */}
      <Input
        id="companySize"
        name="companySize"
        label="Tamaño de la empresa"
        placeholder="e.g., 1-10, 11-50"
        value={formData.companySize || ''}
        onChange={handleChange}
        required
      />
      <Input
        id="languagePreference"
        name="languagePreference"
        label="Preferencia de idioma"
        placeholder="e.g., Español, English"
        value={formData.languagePreference || ''}
        onChange={handleChange}
        required
      />
    </form>
  );
};

export default BusinessDetailsStep;