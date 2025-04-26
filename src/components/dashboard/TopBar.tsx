import React from 'react';
import './styles/_topbar.scss';

interface Issue {
  date: string;
  title: string;
  score: number;
}

interface TopBarProps {
  isAnalysisComplete?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ isAnalysisComplete = false }) => {
  // Datos de ejemplo para mostrar en la tabla
  const issues: Issue[] = [
    { date: '29-06-2022', title: 'Frameable response, weaponization', score: 4 },
    { date: '24-06-2022', title: 'Observable response discrepancy, user enumeration', score: 3 },
    { date: '23-06-2022', title: 'Uncontrolled resource consumption', score: 2 },
    { date: '23-06-2022', title: 'Information disclosure on error message', score: 2 },
    { date: '23-06-2022', title: 'Access information / credentials', score: 1 },
    { date: '23-06-2022', title: 'Modification of assumable-immutable data, maid', score: 4 },
    { date: '20-06-2022', title: 'User enumeration: blacklisted', score: 1 }
  ];
  
  // Renderizar los puntos de score
  const renderScore = (score: number) => {
    return (
      <div className="topbar__score">
        <span>{score}</span>
        <div className="topbar__dots">
          {[1, 2, 3, 4, 5].map((index) => (
            <span 
              key={index} 
              className={`topbar__dot ${index < score ? 'topbar__dot--filled' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    );
  };

  // Si el análisis está completo, mostrar la tabla de issues
  if (isAnalysisComplete) {
    return (
      <header className="topbar topbar--completed">
        <h2 className="topbar__issues-title">Issues overview</h2>
        <div className="topbar__table">
          <div className="topbar__table-header">
            <div className="topbar__table-cell">published</div>
            <div className="topbar__table-cell">issue title</div>
            <div className="topbar__table-cell topbar__table-cell--score">score</div>
          </div>
          
          {issues.map((issue, index) => (
            <div key={index} className="topbar__table-row">
              <div className="topbar__table-cell">{issue.date}</div>
              <div className="topbar__table-cell">{issue.title}</div>
              <div className="topbar__table-cell topbar__table-cell--score">
                {renderScore(issue.score)}
              </div>
            </div>
          ))}
        </div>
      </header>
    );
  }

  // Si el análisis no está completo, mostrar el contenido original
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