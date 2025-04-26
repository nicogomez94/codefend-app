import React from 'react';
import './styles/_onboard.scss';
// Option 1: Default import if the SVG is exported as default
import Ojo from '../../assets/red-eye.svg';

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
          <p>CODEFEND</p>
        </div>

        <p className="onboard-card__text">
          Vamos a realizar un análisis automático sobre el dominio seleccionado. Confirma que desea
          lanzar un análisis automático sobre <br />
          <strong>{domain}</strong>
        </p>

        <div className="onboard-card__illustration">
          {/* <EyeIllustration /> */}
          <img src={Ojo} alt="Eye Illustration" />
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