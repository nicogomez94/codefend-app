import React from 'react';

interface PhoneInputFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  defaultCountryCode?: string;
  className?: string;
  labelClassName?: string;
  error?: string;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  label,
  id,
  value,
  onChange,
  defaultCountryCode = "+1",
  className,
  labelClassName,
  error
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const inputClassName = `${className} ${error ? 'input-error' : ''}`;

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>{label}</label>
      <div className="phone-input-container">
        <select defaultValue={defaultCountryCode}>
          <option>+54</option>
          <option>+1</option>
        </select>
        <input
          id={id}
          type="tel"
          value={value}
          onChange={handleInputChange}
          className={inputClassName}
          placeholder="Phone number"
          style={{ flexGrow: 1 }}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      </div>
      {error && <p id={`${id}-error`} className="onboarding-step__error">{error}</p>}
    </div>
  );
};

export default PhoneInputField;