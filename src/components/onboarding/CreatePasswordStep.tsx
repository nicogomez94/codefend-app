import React, { useState } from 'react';
import { InputField } from '../common';
import type { OnboardingFormData } from '../../store/onboardingStore';
import './styles/_onboarding-steps.scss';

interface CreatePasswordStepProps {
  formData: Partial<OnboardingFormData>;
  updateFormData: (field: keyof OnboardingFormData, value: string) => void;
}

const CreatePasswordStep: React.FC<CreatePasswordStepProps> = ({ formData, updateFormData }) => {
  const [password, setPassword] = useState(formData.password ?? '');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (value: string): string => {
    const hasNumber = /\d/.test(value);
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isLongEnough = value.length >= 12;

    if (!isLongEnough) {
      return "La contraseña debe tener al menos 12 caracteres";
    }

    if (!(hasNumber && hasLetter && hasSymbol)) {
      return "La contraseña debe contener al menos un número, una letra y un símbolo";
    }

    return "";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    const error = validatePassword(value);
    setPasswordError(error);

    if (!error) {
      updateFormData('password', value);
      if (confirmPassword && value !== confirmPassword) {
        setPasswordError("Las contraseñas no coinciden");
      } else if (confirmPassword && value === confirmPassword) {
         setPasswordError(""); // Clear error if they now match
      }
    } else {
       updateFormData('password', ''); // Clear password in store if invalid
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (password && password !== value) {
      setPasswordError("Las contraseñas no coinciden");
    } else {
      setPasswordError(validatePassword(password));
    }
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
          // Consider adding error display logic based on passwordError for this field too
        />

        <InputField
          id="confirmPassword"
          type="password"
          label="Confirmar password"
          placeholder="Confirme su contraseña"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={passwordError} // Pass the error message to the InputField
          className="onboarding-input"
          labelClassName="onboarding-label"
        />
        {/* Ensure InputField component can display the error message */}
         {passwordError && <p className="onboarding-step__error">{passwordError}</p>}
      </div>
    </div>
  );
};

export default CreatePasswordStep;