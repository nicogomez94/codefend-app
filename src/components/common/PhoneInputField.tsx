// filepath: c:\Users\nicol\github\codefend-nico\codefend-test\src\components\common\PhoneInputField.tsx
import React from 'react';

interface PhoneInputFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  defaultCountryCode?: string;
  className?: string;
  labelClassName?: string;
}

// placeholder MUY basico - considera usar una libreria como react-phone-number-input
const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  label,
  id,
  value,
  onChange,
  defaultCountryCode = "+1",
  className,
  labelClassName
}) => {
  // logica muy simple, no maneja el prefijo realmente
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>{label}</label>
      <div style={{ display: 'flex' }} className="phone-input-container"> {/* añade clase contenedora */}
        <select style={{ marginRight: '5px', padding: '0.5rem' }} defaultValue={defaultCountryCode}>
          <option>+54</option>
          <option>+1</option>
          {/* ... mas codigos ... */}
        </select>
        <input
          id={id}
          type="tel"
          value={value}
          onChange={handleInputChange}
          className={className} // aplica clase al input
          placeholder="Phone number"
          style={{ flexGrow: 1 }}
        />
      </div>
    </div>
  );
};

export default PhoneInputField;