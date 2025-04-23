import React from 'react';

const IssuesTable: React.FC = () => {
  return (
    <div className="bg-white shadow-sm rounded-md mt-6">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Issues</h2>
      </div>
      <div className="p-4">
        <div className="text-center py-10 text-gray-500">
          <p>Aún no hemos detectado vulnerabilidades ni amenazas en sus sistemas, pero hay un scannéo automático procesando.</p>
        </div>
      </div>
    </div>
  );
};

export default IssuesTable;