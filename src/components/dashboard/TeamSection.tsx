import React from 'react';
import './styles/_team.scss';

interface TeamMember {
  email: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { email: 'chris@codefend.com', role: 'Founder' },
  { email: 'edd@codefend.com', role: 'Collaborator' },
  { email: 'hernan@codefend.com', role: 'Collaborator' },
  { email: 'nacho@codefend.com', role: 'Collaborator' },
];

const TeamSection: React.FC = () => {
  return (
    <div className="team-section">
      {/* Contenedor de información */}
      <div className="team-section__info-container">
        <h3 className="team-section__title">
          <span className="team-section__icon">👥</span> Colaboradores
        </h3>
        <ul className="team-section__info-list">
          <li className="team-section__info-item">- Añada colaboradores a su equipo</li>
          <li className="team-section__info-item">- Resuelva las vulnerabilidades más fácil.</li>
          <li className="team-section__info-item">- No hay un máximo de colaboradores.</li>
        </ul>
        <br />
        <button className="team-section__add-btn">Añadir un colaborador</button>
      </div>

      {/* Contenedor de tabla */}
      <div className="team-section__table-container">
        <div className="team-section__table-header">
          <div>Email</div>
          <div>Member role</div>
        </div>
        <div className="team-section__table-body">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-section__table-body-row">
              <div className="team-section__table-row-email">{member.email}</div>
              <div className="team-section__table-row-role">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;