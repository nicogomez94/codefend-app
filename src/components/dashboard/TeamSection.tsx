import React from 'react';
import './styles/_team.scss';

interface TeamMember {
  email: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { email: 'chris@codefend.com', role: 'Founder' },
  { email: 'edo@codefend.com', role: 'Collaborator' },
  { email: 'hernan@codefend.com', role: 'Collaborator' },
  { email: 'nacho@codefend.com', role: 'Collaborator' },
];

const TeamSection: React.FC = () => {
  return (
    <div className="team-section">
      <div className="team-section__header">
        <h3 className="team-section__title">Colaboradores</h3>
        <div className="team-section__icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="team-section__icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      </div>
      
      <ul className="team-section__info">
        <li className="team-section__info-item">- Añada colaboradores a su equipo</li>
        <li className="team-section__info-item">- Resuelva las vulnerabilidades más fácil.</li>
        <li className="team-section__info-item">- No hay un máximo de colaboradores.</li>
      </ul>
      
      <button className="team-section__add-btn">- Añadir un colaborador.</button>
      
      <div className="team-section__table">
        <div className="team-section__table-header">
          <div>Email</div>
          <div>Member role</div>
        </div>
        
        <div className="team-section__table-body">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-section__table-row">
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