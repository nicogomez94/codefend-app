import React from 'react';
import './styles/_onboard.scss';
// import { ReactComponent as CodefendLogo } from '../../assets/codefend-logo.svg';
// import { ReactComponent as EyeIllustration } from '../../assets/eye-illustration.svg'; // Asume que tienes esta ilustración

interface OnboardStep2Props {
  domain: string;
  onAnalyze: () => void;
  onBack: () => void;
}

const OnboardStep2: React.FC<OnboardStep2Props> = ({ domain, onAnalyze, onBack }) => {
  return (
    <div className="onboard-modal">
      <div className="onboard-card onboard-card--step2">
        <div className="onboard-card__logo">
          {/* <CodefendLogo /> */}
          <p>CODEFEND LOGO</p>
        </div>

        <p className="onboard-card__text">
          Vamos a realizar un análisis automático sobre el dominio seleccionado. Confirma que desea
          lanzar un análisis automático sobre <br />
          <strong>{domain}</strong>
        </p>

        <div className="onboard-card__illustration">
          {/* <EyeIllustration /> */}
          <p style={{ fontSize: '4rem', textAlign: 'center' }}>👁️</p> {/* Placeholder */}
        </div>

        <div className="onboard-card__actions">
          <button className="onboard-card__btn onboard-card__btn--secondary" onClick={onBack}>
            Volver
          </button>
          <button className="onboard-card__btn onboard-card__btn--primary" onClick={onAnalyze}>
            Analizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardStep2;