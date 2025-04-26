import React, { useState } from 'react';
import './styles/_onboard.scss';
// import { ReactComponent as CodefendLogo } from '../../assets/codefend-logo.svg'; // Asume que tienes el logo SVG
// import { ReactComponent as ScanIcon } from '../../assets/scan-icon.svg'; // Asume que tienes un icono de scan
// import { ReactComponent as FlagIcon } from '../../assets/flag-icon.svg'; // Asume que tienes un icono de bandera

interface OnboardStep1Props {
  onNext: () => void;
  onGoToDashboard: () => void;
}

const OnboardStep1: React.FC<OnboardStep1Props> = ({ onNext, onGoToDashboard }) => {
  const [domain, setDomain] = useState('www.mercadolibre.com');
  const subdomains = [
    'mercadolibre.com',
    'api.mercadolibre.com',
    'cerbero.mercadolibre.com',
    'citiportal.mercadolibre.com',
    'correo.mercadolibre.com',
    'crmla.mercadolibre.com',
  ];

  return (
    <div className="onboard-modal">
      <div className="onboard-card">
        <div className="onboard-card__logo">
          <p>CODEFEND</p>
        </div>

        <p className="onboard-card__text">
          Su usuario ha sido creado. Verifique su dominio y el alcance y presione continuar
          para añadir su primer recurso. A continuación vamos a realizar un análisis automatizado
          sobre su dominio principal.
        </p>

        <div className="onboard-card__input-section">
          <label htmlFor="domain-input" className="onboard-card__label">Definir superfice de scanner:</label>
          <div className="onboard-card__input-wrapper">
            <input
              id="domain-input"
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="onboard-card__input"
            />
            <button className="onboard-card__scan-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2" fill="none"/>
                <line x1="5" y1="5" x2="9" y2="9" stroke="#fff" stroke-width="2"/>
                <line x1="19" y1="5" x2="15" y2="9" stroke="#fff" stroke-width="2"/>
                <line x1="5" y1="19" x2="9" y2="15" stroke="#fff" stroke-width="2"/>
                <line x1="19" y1="19" x2="15" y2="15" stroke="#fff" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" stroke="#fff" stroke-width="2" fill="none"/>
                <circle cx="12" cy="12" r="1" fill="#fff"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="onboard-card__domain-list">
          {subdomains.map((sub, index) => (
            <div key={index} className={`onboard-card__domain-item ${index === 0 ? 'onboard-card__domain-item--main' : ''}`}>
              <span>{sub}</span>
              {/* <FlagIcon className="onboard-card__flag-icon" /> */}
              <svg width="24" height="24" viewBox="0 0 720 480" xmlns="http://www.w3.org/2000/svg">
                <rect width="720" height="160" fill="#75AADB"/>
                <rect width="720" height="160" y="320" fill="#75AADB"/>
                <rect width="720" height="160" y="160" fill="#fff"/>
                <circle cx="360" cy="240" r="53.33" fill="#FCD954"/>
                <path d="m344.8 224.8 3.8 11.7 10.4-7.6-10.4-7.6-3.8 11.7zm30.4 0-3.8 11.7-10.4-7.6 10.4-7.6 3.8 11.7zm-15.2 30.4 10.4 7.6-3.8 11.7-6.6-19.3zm-10.4-7.6 7.6 10.4-11.7 3.8-7.6-10.4 11.7-3.8zm30.4 0-7.6 10.4 11.7 3.8 7.6-10.4-11.7-3.8zm-15.2 30.4-10.4 7.6 3.8 11.7 6.6-19.3z" fill="#000"/>
              </svg>
            </div>
          ))}
        </div>

        <div className="onboard-card__actions">
          <button className="onboard-card__btn onboard-card__btn--secondary" onClick={onGoToDashboard}>
            Dashboard
          </button>
          <button className="onboard-card__btn onboard-card__btn--primary" onClick={onNext}>
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardStep1;