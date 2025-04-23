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

    if (!isLongEnough) return "La contraseña debe tener al menos 12 caracteres";
    if (!(hasNumber && hasLetter && hasSymbol)) return "La contraseña debe contener al menos un número, una letra y un símbolo";
    return "";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    const validationError = validatePassword(value);
    let currentError = validationError;

    if (!validationError) {
      updateFormData('password', value);
      if (confirmPassword && value !== confirmPassword) {
        currentError = "Las contraseñas no coinciden";
      }
    } else {
      updateFormData('password', '');
    }
    setPasswordError(currentError);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    const validationError = validatePassword(password); // Revalida la original

    if (validationError) {
        setPasswordError(validationError); // Muestra error de validacion si la original es invalida
    } else if (password && password !== value) {
      setPasswordError("Las contraseñas no coinciden");
    } else {
      setPasswordError(""); // Borra error si coinciden y la original es valida
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
          // Pasa el error especifico de este campo si quieres diferenciar
          // error={passwordError && !confirmPassword ? passwordError : ''} // Ejemplo: solo muestra error de validacion aqui
        />
        <InputField
          id="confirmPassword"
          type="password"
          label="Confirmar password"
          placeholder="Confirme su contraseña"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={passwordError} // Pasa el error (validacion o no coincidencia)
          className="onboarding-input"
          labelClassName="onboarding-label"
        />
        {/* Ya no necesitas el <p> aqui, InputField lo maneja */}
      </div>
    </div>
  );
};

export default CreatePasswordStep;