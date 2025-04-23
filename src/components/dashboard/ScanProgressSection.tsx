import React from 'react';
import './styles/_scanprogress.scss'; // Import the Sass file

const ScanProgressSection: React.FC = () => {
  return (
    <div className="scan-progress-section">
      <h3 className="scan-progress-section__title">Scannéo en curso</h3>
      <p className="scan-progress-section__description">
        Los scanners automáticos están analizando uno de sus recursos web:
      </p>
      <div className="scan-progress-section__domain">
        <span className="text-sm font-semibold">www.lanacion.com</span>
      </div>
      <div className="scan-progress-section__progress-bar-container">
        <div className="scan-progress-section__progress-bar" style={{ width: '82%' }}></div>
      </div>
      <div className="scan-progress-section__stats">
        <div className="scan-progress-section__stats__item">
          <div className="scan-progress-section__stats__item__value red">26</div>
          <div className="scan-progress-section__stats__item__label">TOTAL FINDINGS</div>
        </div>
        <div className="scan-progress-section__stats__item">
          <div className="scan-progress-section__stats__item__value">0/26</div>
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