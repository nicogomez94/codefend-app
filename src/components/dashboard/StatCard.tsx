import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  color: 'red' | 'yellow' | 'gray';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color }) => {
  const colorClasses = {
    red: 'bg-red-100 text-red-500',
    yellow: 'bg-yellow-100 text-yellow-500',
    gray: 'bg-gray-100 text-gray-500',
  };

  return (
    <div className="bg-white shadow-sm rounded-md p-4">
      <div className="flex flex-col">
        <div className="text-sm text-gray-500 mb-1">{title}</div>
        <div className="flex justify-between items-end">
          <div className="text-2xl font-semibold">{value}</div>
          <div className={`px-2 py-1 rounded-md text-xs font-medium ${colorClasses[color]}`}>
            ISSUES
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;