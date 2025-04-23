// filepath: c:\Users\nicol\github\codefend-nico\codefend-test\src\components\common\Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'disabled';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled,
  className = '',
  ...props
}) => {
  const baseStyle = "px-6 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    primary: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  };

  const currentVariant = disabled ? 'disabled' : variant;

  return (
    <button
      className={`${baseStyle} ${variantStyles[currentVariant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;