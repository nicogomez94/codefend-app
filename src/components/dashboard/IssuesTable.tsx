import React from 'react';
import './styles/_issuestable.scss';

const IssuesTable: React.FC = () => {
  return (
    <div className="issues-table">
      <div className="issues-table__header">
        <h2 className="issues-table__title">Issues</h2>
      </div>
      <div className="issues-table__content">
        <div className="issues-table__empty">
          <p>Aún no hemos detectado vulnerabilidades ni amenazas en sus sistemas, pero hay un scannéo automático procesando.</p>
        </div>
      </div>
    </div>
  );
};

export default IssuesTable;