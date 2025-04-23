import React from 'react';
import './styles/_onboard.scss';
// import { ReactComponent as CodefendLogo } from '../../assets/codefend-logo.svg';

interface OnboardStep3Props {
  domain: string;
  progress: number; // Porcentaje de 0 a 100
  totalFindings: number;
  analyzingFindings: string; // e.g., "12/26"
  phase: string;
  estimatedTime: string;
  onGoToDashboard: () => void;
}

const OnboardStep3: React.FC<OnboardStep3Props> = ({
  domain,
  progress,
  totalFindings,
  analyzingFindings,
  phase,
  estimatedTime,
  onGoToDashboard,
}) => {
  const circumference = 2 * Math.PI * 45; // Radio = 45
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="onboard-modal">
      <div className="onboard-card onboard-card--step3">
        <div className="onboard-card__logo">
          {/* <CodefendLogo /> */}
          <p>CODEFEND LOGO</p>
        </div>

        <p className="onboard-card__text">
          {progress < 100 ? (
            <>El dominio <strong>{domain}</strong> está siendo analizado...</>
          ) : (
            <>El análisis del dominio <strong>{domain}</strong> ha finalizado.</>
          )}
          {' '}Los issues y posibles amenazas localizadas se verán en el panel y serán comunicadas por email. Por favor espere aquí
          o continúe <a href="#" onClick={(e) => { e.preventDefault(); onGoToDashboard(); }}>hacia nuestro dashboard</a>.
        </p>

        <div className="onboard-card__progress-chart">
          <svg viewBox="0 0 100 100">
            <circle
              className="progress-ring__bg"
              cx="50"
              cy="50"
              r="45"
            />
            <circle
              className="progress-ring__progress"
              cx="50"
              cy="50"
              r="45"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={offset}
            />
            <text x="50" y="55" textAnchor="middle" className="progress-ring__text">
              {progress}%
            </text>
          </svg>
        </div>

        {progress === 100 && (
          <>
            <div className="onboard-card__stats">
              <div className="onboard-card__stat-item">
                <div className="value">{totalFindings}</div>
                <div className="label">TOTAL FINDINGS</div>
              </div>
              <div className="onboard-card__stat-item">
                <div className="value">{analyzingFindings}</div>
                <div className="label">ANALIZING FINDINGS</div>
              </div>
            </div>

            <div className="onboard-card__info">
              <p>- Fase actual: {phase}</p>
              <p>- Dominio: {domain}</p>
              <p>- Tiempo promedio estimado: {estimatedTime}</p>
            </div>
          </>
        )}

        <div className="onboard-card__actions onboard-card__actions--center">
          <button className="onboard-card__btn onboard-card__btn--secondary" onClick={onGoToDashboard}>
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardStep3;