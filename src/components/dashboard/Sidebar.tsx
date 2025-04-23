import React from 'react';
import { Link } from 'react-router-dom';

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
    items: [
      { name: 'Main', path: '/dashboard', active: false },
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
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" viewBox="0 0 200 50" fill="#ef4444">
          <path d="M20,10 C14.5,10 10,14.5 10,20 C10,25.5 14.5,30 20,30 L30,30 L30,20 C30,14.5 25.5,10 20,10 Z M20,25 C17.2,25 15,22.8 15,20 C15,17.2 17.2,15 20,15 C22.8,15 25,17.2 25,20 L25,25 L20,25 Z"/>
          <text x="40" y="25" fontSize="20" fontFamily="Arial" fontWeight="bold">CODEFEND</text>
        </svg>
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
    </aside>
  );
};

export default Sidebar;