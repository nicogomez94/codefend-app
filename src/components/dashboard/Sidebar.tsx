import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4 border-b border-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" viewBox="0 0 200 50" fill="#ef4444">
          <path d="M20,10 C14.5,10 10,14.5 10,20 C10,25.5 14.5,30 20,30 L30,30 L30,20 C30,14.5 25.5,10 20,10 Z M20,25 C17.2,25 15,22.8 15,20 C15,17.2 17.2,15 20,15 C22.8,15 25,17.2 25,20 L25,25 L20,25 Z"/>
          <text x="40" y="25" fontSize="20" fontFamily="Arial" fontWeight="bold">CODEFEND</text>
        </svg>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <span className="ml-3">Main</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="flex items-center p-2 text-gray-700 rounded bg-gray-100">
              <span className="ml-3 font-medium">Dashboard</span>
            </Link>
          </li>
          {/* Agregar más opciones de menú según sea necesario */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;