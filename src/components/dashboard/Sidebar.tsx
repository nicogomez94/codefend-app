import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnboardingStore from '../../store/onboardingStore'; // Importa el store
import { Button } from '../common'; // Asume que tienes un componente Button
import UserProfileModal from './UserProfileModal'; // Importa el componente UserProfileModal

interface MenuSection {
  title?: string;
  items: {
    name: string;
    path: string;
    active?: boolean;
  }[];
}

const menuSections: MenuSection[] = [
  {
    title: 'Main',
    items: [
      { name: 'Dashboard', path: '/dashboard', active: true },
      { name: 'Team members', path: '/dashboard/team', active: false },
      { name: 'Orders and payments', path: '/dashboard/orders', active: false },
      { name: 'User profile', path: '/dashboard/profile', active: false },
    ]
  },
  {
    title: 'Attack surface',
    items: [
      { name: 'Web software', path: '/dashboard/web', active: false },
      { name: 'Mobile software', path: '/dashboard/mobile', active: false },
      { name: 'Network Infrastructure', path: '/dashboard/network', active: false },
      { name: 'Social attacks', path: '/dashboard/social', active: false },
    ]
  },
  {
    title: 'Issues',
    items: [
      { name: 'Generate reports', path: '/dashboard/reports', active: false },
      { name: 'Open issues', path: '/dashboard/open-issues', active: false },
      { name: 'Fixed issues', path: '/dashboard/fixed-issues', active: false },
      { name: 'Accepted risks', path: '/dashboard/risks', active: false },
    ]
  },
  {
    title: 'Toolset',
    items: [
      { name: 'Automated web scans', path: '/dashboard/web-scans', active: false },
      { name: 'Darkweb explorer', path: '/dashboard/darkweb', active: false },
      { name: 'Talk to a hacker', path: '/dashboard/support', active: false },
    ]
  }
];

const Sidebar: React.FC = () => {
  const { formData } = useOnboardingStore(); // Obtén los datos del store
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Obtén el nombre del usuario, usa un valor por defecto si no está disponible
  const userName = formData.firstName || 'Usuario';

  return (
    <aside className="sidebar">
      {/* Nueva sección de perfil */}
      <div className="sidebar__profile-section">
        <span className="sidebar__greeting">Hola, {userName}</span>
        <Button
          onClick={handleOpenModal}
          className="sidebar__profile-button"
        >
          Ver perfil
        </Button>
      </div>

      <nav className="sidebar__nav">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="sidebar__section">
            {section.title && (
              <h3 className="sidebar__section-title">
                {section.title}
              </h3>
            )}
            <ul className="sidebar__menu">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="sidebar__menu-item">
                  <Link
                    to={item.path}
                    className={`sidebar__menu-link ${
                      item.active ? 'sidebar__menu-link--active' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Renderiza el modal si está abierto */}
      {isModalOpen && (
        <UserProfileModal
          userData={formData}
          onClose={handleCloseModal}
        />
      )}
    </aside>
  );
};

export default Sidebar;