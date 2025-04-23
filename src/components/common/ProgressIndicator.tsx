// filepath: c:\Users\nicol\github\codefend-nico\codefend-test\src\components\common\ProgressIndicator.tsx
import React from 'react';

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  totalSteps,
  currentStep,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center space-x-2 my-6 ${className}`}>
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <React.Fragment key={stepNumber}>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                isActive || isCompleted ? 'border-red-500' : 'border-gray-300'
              } ${isCompleted ? 'bg-red-500' : isActive ? 'bg-white' : 'bg-gray-100'}`}
            >
              {isCompleted ? (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              ) : (
                <span className={`text-xs font-semibold ${isActive ? 'text-red-500' : 'text-gray-400'}`}>
                  {/* Optionally show step number: {stepNumber} */}
                </span>
              )}
               {/* Small dot inside active step */}
               {isActive && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
            </div>
            {stepNumber < totalSteps && (
              <div className={`flex-1 h-0.5 ${isCompleted ? 'bg-red-500' : 'bg-gray-300'}`}></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressIndicator;