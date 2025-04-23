import React from 'react';

const ScanProgressSection: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-sm p-5">
      <h3 className="text-lg font-medium mb-2">Scannéo en curso</h3>
      <p className="text-sm text-gray-600 mb-2">
        Los scanners automáticos están analizando uno de sus recursos web:
      </p>
      <div className="mb-3">
        <span className="text-sm font-semibold">www.lanacion.com</span>
      </div>
      <div className="w-full bg-gray-200 rounded h-2">
        <div className="bg-red-500 h-2 rounded" style={{ width: '82%' }}></div>
      </div>
      <div className="mt-4 flex justify-between">
        <div className="text-center">
          <div className="text-xl font-bold text-red-500">26</div>
          <div className="text-xs text-gray-500 uppercase">TOTAL FINDINGS</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold">0/26</div>
          <div className="text-xs text-gray-500 uppercase">PARSED FINDINGS</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold">82%</div>
          <div className="text-xs text-gray-500 uppercase">EST. PROGRESS</div>
        </div>
      </div>
    </div>
  );
};

export default ScanProgressSection;