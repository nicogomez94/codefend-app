import React from 'react';
import './styles/_statcard.scss';

interface StatCardProps {
  title: string;
  value: string | number;
  color: 'red' | 'gray';
  size?: 'small' | 'large';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color, size = 'large' }) => {
  const sizeClass = size === 'small' ? 'stat-card--small' : '';
  const colorClass = `stat-card__value--${color}`;

  return (
    <div className={`stat-card ${sizeClass}`}>
      <div className={`stat-card__value ${colorClass}`}>
        {value}
      </div>
      <div className="stat-card__title">
        {title}
      </div>
    </div>
  );
};

export default StatCard;