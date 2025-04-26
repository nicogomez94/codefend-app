import React, { useState } from 'react';
import { InputField } from '../common';
import type { OnboardingFormData } from '../../store/onboardingStore';
import './styles/_onboarding-steps.scss';

interface CreatePasswordStepProps {
  formData: Partial<OnboardingFormData>;
  updateFormData: (field: keyof OnboardingFormData, value: string) => void;
  errors: { [key in keyof OnboardingFormData]?: string }; // Añade la prop errors
}

const CreatePasswordStep: React.FC<CreatePasswordStepProps> = ({ formData, updateFormData, errors }) => {
  const [password, setPassword] = useState(formData.password ?? '');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    updateFormData('password', value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };

  return (
    <div className="onboarding-step">
      <h2 className="onboarding-step__subtitle">Crear un password:</h2>
      <p className="onboarding-step__description">
        ¡Listo! Alcanzamos la etapa final, solo queda definir tu password para obtener acceso al sistema y nuestra prueba sin cargos.
        El password debe tener 1 número, 1 letra, 12 caracteres, y un símbolo.
      </p>
      <div className="onboarding-step__form">
        <InputField
          id="password"
          type="password"
          label="Password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={handlePasswordChange}
          className="onboarding-input"
          labelClassName="onboarding-label"
          error={errors?.password} // Muestra el error desde la prop errors
        />
        <InputField
          id="confirmPassword"
          type="password"
          label="Confirmar password"
          placeholder="Confirme su contraseña"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="onboarding-input"
          labelClassName="onboarding-label"
          error={password !== confirmPassword ? 'Las contraseñas no coinciden' : undefined} // Validación local
        />
      </div>
    </div>
  );
};

export default CreatePasswordStep;