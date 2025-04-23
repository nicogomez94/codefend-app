import React from 'react';

const TopBar: React.FC = () => {
  return (
    <header className="topbar">
      <div className="topbar__content">
        <div className="topbar__info">
          <h1 className="topbar__title">Exploración de superficie en curso</h1>
          <p className="topbar__description">
            Aún no hemos detectado vulnerabilidades ni amenazas en sus sistemas, pero hay un scannéo automático procesando información, apenas se localice una, vos y tu equipo serán notificados.
          </p>
          <div>
            <button className="topbar__button">
              Ir hacia la sección de issues
            </button>
          </div>
        </div>
        <div className="topbar__illustration">
          {/* Ilustración de bugs */}
          <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="40" r="15" fill="#fed7d7"/>
            <circle cx="40" cy="70" r="15" fill="#fed7d7"/>
            <circle cx="80" cy="70" r="15" fill="#fed7d7"/>
            
            <g transform="translate(40, 70)">
              <ellipse cx="0" cy="0" rx="8" ry="10" fill="#000" />
              <circle cx="-3" cy="-3" r="1.5" fill="#fff" />
              <circle cx="3" cy="-3" r="1.5" fill="#fff" />
            </g>
            
            <g transform="translate(80, 70)">
              <ellipse cx="0" cy="0" rx="8" ry="10" fill="#000" />
              <circle cx="-3" cy="-3" r="1.5" fill="#fff" />
              <circle cx="3" cy="-3" r="1.5" fill="#fff" />
            </g>
            
            <g transform="translate(60, 40)">
              <ellipse cx="0" cy="0" rx="8" ry="10" fill="#ef4444" />
              <circle cx="-3" cy="-3" r="1.5" fill="#fff" />
              <circle cx="3" cy="-3" r="1.5" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default TopBar;