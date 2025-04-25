import React from 'react';
import './styles/_addsection.scss';

const AddResourcesSection: React.FC = () => {
  return (
    <div className="add-resources">
      <h3 className="add-resources__title">Añadir recursos</h3>
      <p className="add-resources__description">
        Añada recursos para que podamos dimensionar su superficie de ataque y diseñar un plan a medida de sus necesidades.
      </p>
      <hr />
      <br />
      <button className="add-resources__button">
        Ir hacia recursos
      </button>
    </div>
  );
};

export default AddResourcesSection;