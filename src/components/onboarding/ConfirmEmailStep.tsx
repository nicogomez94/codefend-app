import React, { useState } from 'react';
import { Input } from '../common';
import type { OnboardingFormData } from '../../store/onboardingStore';

interface ConfirmEmailStepProps {
  formData: Partial<OnboardingFormData>;
  updateFormData: (field: keyof OnboardingFormData, value: string) => void;
}

const ConfirmEmailStep: React.FC<ConfirmEmailStepProps> = ({ formData, updateFormData }) => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
    updateFormData('verificationCode', e.target.value);
  };

  return (
    <div className="text-center">
      <div className="mb-6">
        <div className="w-24 h-24 rounded-full bg-red-100 mx-auto flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-3">Confirme su email</h3>
      
      <p className="text-sm text-gray-600 mb-6">
        Una vez que crees tu usuario, vamos a ayudarte con el alta de tu primer recurso,
        y realizaremos una serie de pruebas automatizadas empleando escanners automatizados e inteligencia artificial.
      </p>
      
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">
          Por favor revise su bandeja de entrada, copie el código de verificación
          y péguelo en el campo de abajo para confirmar su email. O haga clic en el enlace enviado.
        </p>
        
        <Input
          id="verificationCode"
          name="verificationCode"
          label="Unique reference code"
          placeholder="Enter verification code"
          value={verificationCode}
          onChange={handleChange}
          required
          className="text-center"
        />
      </div>
    </div>
  );
};

export default ConfirmEmailStep;