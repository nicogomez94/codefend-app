// filepath: c:\Users\nicol\github\codefend-nico\codefend-test\src\components\common\Button.tsx
import React from 'react';
import './styles/Button.scss';

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
  const currentVariant = disabled ? 'disabled' : variant;
  
  return (
    <button
      className={`button button--${currentVariant} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;