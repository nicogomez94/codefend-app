import React from 'react';

interface ResourceCardProps {
  count: number;
  label: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ count, label }) => {
  return (
    <div className="bg-white rounded-md shadow-sm p-5 text-center">
      <div className="text-3xl font-bold mb-1">
        {count}
      </div>
      <div className="text-xs text-gray-500 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default ResourceCard;