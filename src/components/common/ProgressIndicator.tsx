// filepath: c:\Users\nicol\github\codefend-nico\codefend-test\src\components\common\ProgressIndicator.tsx
import React from 'react';
import './styles/_progress-indicator.scss'; // crearemos este archivo

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ totalSteps, currentStep }) => {
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="progress-indicator">
      <div className="progress-indicator__bar-bg">
        <div
          className="progress-indicator__bar-fg"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <div className="progress-indicator__steps">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`progress-indicator__step ${index + 1 <= currentStep ? 'progress-indicator__step--active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;