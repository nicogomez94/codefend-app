import React from 'react';

interface RiskLevel {
  level: string;
  count: string;
  percentage: string;
}

const riskLevels: RiskLevel[] = [
  { level: 'critical', count: '05', percentage: '05%' },
  { level: 'elevated', count: '05', percentage: '05%' },
  { level: 'medium', count: '10', percentage: '10%' },
  { level: 'low', count: '20', percentage: '20%' },
  { level: 'intel', count: '60', percentage: '60%' },
];

const RiskLevelChart: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-sm p-5">
      <h3 className="text-lg font-medium mb-4">Issues count</h3>
      
      <div className="mb-4">
        <div className="relative w-48 h-48 mx-auto">
          {/* Gráfico circular simplificado */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="20" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#fee2e2" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="125.6" transform="rotate(-90 50 50)" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#fecaca" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="213.52" transform="rotate(-90 50 50)" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="238.64" transform="rotate(-90 50 50)" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white w-28 h-28 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        {riskLevels.map((risk, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <div className="font-medium">{risk.level}</div>
            <div className="flex space-x-4">
              <div className="w-12 text-right">{risk.count}</div>
              <div className="w-12 text-right text-gray-500">{risk.percentage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskLevelChart;