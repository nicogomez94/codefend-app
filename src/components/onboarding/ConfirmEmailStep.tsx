import React from 'react';
import { InputField } from '../common';
import { OnboardingFormData } from '../../store/onboardingStore';
import './styles/_onboarding-steps.scss';

interface ConfirmEmailStepProps {
  formData: OnboardingFormData;
  updateFormData: (field: keyof OnboardingFormData, value: string) => void;
  errors: { [key in keyof OnboardingFormData]?: string }; // Añade la prop errors
}

const ConfirmEmailStep: React.FC<ConfirmEmailStepProps> = ({ formData, updateFormData, errors }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData('verificationCode', e.target.value);
  };

  return (
    <div className="onboarding-step">
      <div className="onboarding-step__icon-wrapper">
        <div className="onboarding-step__icon-bg">
          <svg xmlns="http://www.w3.org/2000/svg" className="onboarding-step__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      <h2 className="onboarding-step__subtitle">Confirme su email</h2>

      <p className="onboarding-step__description">
        Una vez que crees tu usuario, vamos a ayudarte con el alta de tu primer recurso,
        y realizaremos una serie de pruebas automatizadas empleando escanners automatizados e inteligencia artificial.
      </p>

      <p className="onboarding-step__description onboarding-step__description--secondary">
        Por favor revise su bandeja de entrada, copie el código de verificación
        y péguelo en el campo de abajo para confirmar su email. O haga clic en el enlace enviado.
      </p>

      <div className="onboarding-step__form">
        <InputField
          label="Unique reference code"
          id="verificationCode"
          value={formData.verificationCode ?? ''}
          onChange={handleChange}
          placeholder="Enter verification code"
          className="onboarding-input"
          labelClassName="onboarding-label"
          error={errors?.verificationCode} // Muestra el error desde la prop errors
        />
      </div>
    </div>
  );
};

export default ConfirmEmailStep;