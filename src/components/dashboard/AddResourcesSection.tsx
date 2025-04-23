import React from 'react';

const AddResourcesSection: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-sm p-5">
      <h3 className="text-lg font-medium mb-2">Añadir recursos</h3>
      <p className="text-sm text-gray-600 mb-4">
        Añada recursos para que podamos dimensionar su superficie de ataque y diseñar un plan a medida de sus necesidades.
      </p>
      <button className="bg-red-500 text-white text-sm font-medium px-4 py-2 rounded hover:bg-red-600">
        Ir hacia recursos
      </button>
    </div>
  );
};

export default AddResourcesSection;