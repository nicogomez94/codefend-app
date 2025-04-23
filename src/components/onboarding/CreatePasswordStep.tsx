import React, { useState } from 'react';
import { Input } from '../common';
import type { OnboardingFormData } from '../../store/onboardingStore';

interface CreatePasswordStepProps {
  formData: Partial<OnboardingFormData>;
  updateFormData: (field: keyof OnboardingFormData, value: string) => void;
}

const CreatePasswordStep: React.FC<CreatePasswordStepProps> = ({ formData, updateFormData }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (value: string) => {
    // Requisitos de contraseña
    const hasNumber = /\d/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isLongEnough = value.length >= 8;

    if (!isLongEnough) {
      return "La contraseña debe tener al menos 8 caracteres";
    }
    
    if (!(hasNumber && hasUpperCase && hasLowerCase && hasSymbol)) {
      return "La contraseña debe contener al menos un número, una letra mayúscula, una minúscula y un símbolo";
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
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    
    if (password !== value) {
      setPasswordError("Las contraseñas no coinciden");
    } else {
      setPasswordError(validatePassword(password));
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Crear un password:</h3>
      
      <p className="text-sm text-gray-600 mb-6">
        ¡Listo! Alcanzamos la etapa final, solo queda definir tu password para obtener acceso al sistema y nuestra prueba sin cargos. 
        El password debe tener 1 número, 1 letra, 12 caracteres, y un símbolo.
      </p>
      
      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="Ingrese su contraseña"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      
      <Input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        label="Confirmar password"
        placeholder="Confirme su contraseña"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        error={passwordError}
        required
      />
    </div>
  );
};

export default CreatePasswordStep;