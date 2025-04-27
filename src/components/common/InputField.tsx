import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  labelClassName?: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  className,
  labelClassName,
  error, // Recibe la prop error
  ...props
}) => {
  const inputClassName = `${className} ${error ? 'input-error' : ''}`;

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        className={inputClassName} // Usa la clase con posible error
        {...props}
      />
      {/* muestra el mensaje de error si existe */}
      {error && <p className="onboarding-step__error">{error}</p>}
    </div>
  );
};

export default InputField;