import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  color: 'red' | 'blue' | 'gray';
  size?: 'small' | 'large';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color, size = 'large' }) => {
  const colorClasses = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    gray: 'text-gray-500',
  };

  return (
    <div className={`bg-white rounded-md shadow-sm p-4 ${size === 'small' ? 'text-center' : ''}`}>
      <div className="flex flex-col">
        <div className={`text-xs font-medium ${size === 'small' ? 'mb-2' : 'mb-1'}`}>
          {title}
        </div>
        <div className={`${size === 'large' ? 'text-4xl' : 'text-2xl'} font-semibold ${colorClasses[color]}`}>
          {value}
        </div>
      </div>
    </div>
  );
};

export default StatCard;