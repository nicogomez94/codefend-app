import React, { useState } from 'react';
import './styles/_onboard.scss'; // Importaremos los estilos generales del onboard
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
          {/* <CodefendLogo /> */}
          <p>CODEFEND LOGO</p>
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
              {/* <ScanIcon /> */}
              <p>ScanIcon</p>
            </button>
          </div>
        </div>

        <div className="onboard-card__domain-list">
          {subdomains.map((sub, index) => (
            <div key={index} className={`onboard-card__domain-item ${index === 0 ? 'onboard-card__domain-item--main' : ''}`}>
              <span>{sub}</span>
              {/* <FlagIcon className="onboard-card__flag-icon" /> */}
              <p>flagicon</p>
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