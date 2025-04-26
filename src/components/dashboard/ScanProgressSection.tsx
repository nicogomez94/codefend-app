import React from 'react';
import './styles/_scanprogress.scss';

interface ScanProgressSectionProps {
  isAnalysisComplete?: boolean;
  domain?: string;
  totalFindings?: number;
}

interface CompletedScan {
  date: string;
  domain: string;
  totalIssues: number;
}

const ScanProgressSection: React.FC<ScanProgressSectionProps> = ({
  isAnalysisComplete = false,
  domain = 'www.lanacion.com',
  totalFindings = 26
}) => {
  const completedScans: CompletedScan[] = [
    { date: '29-06-2022', domain: 'lanacion.com', totalIssues: 20 },
    { date: '24-06-2022', domain: 'infobae.com', totalIssues: 30 },
    { date: '23-06-2022', domain: 'clarin.com', totalIssues: 40 }
  ];

  if (isAnalysisComplete) {
    return (
      <div className="scan-progress-section scan-progress-section--completed">
        <h3 className="scan-progress-section__title">Todos scaneos finalizados o detenidos</h3>
        <p className="scan-progress-section__description">
          Actualmente no hay scanners automáticos en curso.
        </p>
        
        <div className="scan-progress-section__table">
          <div className="scan-progress-section__table-header">
            <div className="scan-progress-section__table-cell">date</div>
            <div className="scan-progress-section__table-cell">domain</div>
            <div className="scan-progress-section__table-cell">total issues</div>
          </div>
          
          {completedScans.map((scan, index) => (
            <div key={index} className="scan-progress-section__table-row">
              <div className="scan-progress-section__table-cell">{scan.date}</div>
              <div className="scan-progress-section__table-cell">{scan.domain}</div>
              <div className="scan-progress-section__table-cell">{scan.totalIssues}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Si el análisis está en progreso, mostramos la vista actual
  return (
    <div className="scan-progress-section">
      <h3 className="scan-progress-section__title">Escaneo en Curso</h3>
      <p className="scan-progress-section__description">
        Los scanners automáticos están analizando uno de sus recursos web:
      </p>
      <div className="scan-progress-section__domain">
        <span className="text-sm font-semibold">{domain}</span>
      </div>
      <div className="scan-progress-section__progress-bar-container">
        <div className="scan-progress-section__progress-bar" style={{ width: '82%' }}></div>
      </div>
      <div className="scan-progress-section__stats">
        <div className="scan-progress-section__stats__item">
          <div className="scan-progress-section__stats__item__value red">{totalFindings}</div>
          <div className="scan-progress-section__stats__item__label">TOTAL FINDINGS</div>
        </div>
        <div className="scan-progress-section__stats__item">
          <div className="scan-progress-section__stats__item__value">0/{totalFindings}</div>
          <div className="scan-progress-section__stats__item__label">PARSED FINDINGS</div>
        </div>
        <div className="scan-progress-section__stats__item">
          <div className="scan-progress-section__stats__item__value">82%</div>
          <div className="scan-progress-section__stats__item__label">EST. PROGRESS</div>
        </div>
      </div>
    </div>
  );
};

export default ScanProgressSection;