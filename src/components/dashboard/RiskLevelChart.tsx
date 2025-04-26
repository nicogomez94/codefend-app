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
    <div className='risk-chart_main'>
        {/* <h3 className="risk-chart__title">Risk level</h3> */}
        <div className="risk-chart">
        <div className="risk-chart__chart-container">
          <div className="risk-chart__chart">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#eaeaea" stroke-width="20" />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="rgb(234.9802955665, 21.0197044335, 21.0197044335)"
                stroke-width="20"
                stroke-dasharray="502.65"
                stroke-dashoffset="402.12"
                transform="rotate(-90 100 100)"
              />
            </svg>
            <div className="risk-chart__chart-center"></div>
          </div>
        </div>
        
        <div className="risk-chart__levels">
          <div className='risk-chart__titles_container'>
            <span className="risk-chart__titles">Risk level</span>
            <span className="risk-chart__titles">Issues</span>
          </div>
          {riskLevels.map((risk, index) => (
            <div key={index} className="risk-chart__level">
              <div className={`risk-chart__level-name risk-chart__level-name--${risk.level}`}>
                {risk.level}
              </div>
              <div className="risk-chart__level-stats">
                <div>{risk.count}</div>/
                <div>{risk.percentage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskLevelChart;