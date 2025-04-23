import React from 'react';
import './styles/_riskchart.scss';

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
    <div className="risk-chart">
      <h3 className="risk-chart__title">Issues count</h3>
      
      <div className="risk-chart__chart-container">
        <div className="risk-chart__chart">
          <svg viewBox="0 0 100 100" className="risk-chart__chart-svg">
            <circle cx="50" cy="50" r="40" className="risk-chart__chart-bg" />
            <circle cx="50" cy="50" r="40" className="risk-chart__chart-level risk-chart__chart-level--low" transform="rotate(-90 50 50)" />
            <circle cx="50" cy="50" r="40" className="risk-chart__chart-level risk-chart__chart-level--medium" transform="rotate(-90 50 50)" />
            <circle cx="50" cy="50" r="40" className="risk-chart__chart-level risk-chart__chart-level--high" transform="rotate(-90 50 50)" />
          </svg>
          <div className="risk-chart__chart-center"></div>
        </div>
      </div>
      
      <div className="risk-chart__levels">
        {riskLevels.map((risk, index) => (
          <div key={index} className="risk-chart__level">
            <div className="risk-chart__level-name">{risk.level}</div>
            <div className="risk-chart__level-stats">
              <div className="risk-chart__level-count">{risk.count}</div>
              <div className="risk-chart__level-percent">{risk.percentage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskLevelChart;