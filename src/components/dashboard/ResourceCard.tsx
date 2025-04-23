import React from 'react';
import './styles/_resourcecard.scss';

interface ResourceCardProps {
  count: number;
  label: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ count, label }) => {
  return (
    <div className="resource-card">
      <div className="resource-card__count">
        {count}
      </div>
      <div className="resource-card__label">
        {label}
      </div>
    </div>
  );
};

export default ResourceCard;