// filepath: c:\Users\nicol\github\codefend-nico\codefend-test\src\components\common\InputField.tsx
import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  labelClassName?: string;
  // puedes añadir mas props especificas si necesitas, como para errores
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  className, // recibe la clase general (ej. onboarding-input)
  labelClassName, // recibe la clase para el label (ej. onboarding-label)
  ...props // resto de props del input (value, onChange, placeholder, type, etc.)
}) => {
  return (
    <div> {/* contenedor opcional */}
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        className={className} // aplica la clase al input
        {...props}
      />
      {/* aqui podrias poner un mensaje de error si lo necesitas */}
    </div>
  );
};

export default InputField;