import React from 'react';

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
    <div className="bg-white rounded-md shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Colaboradores</h3>
        <div className="text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      </div>
      
      <ul className="space-y-2 mb-4">
        <li className="text-sm text-gray-600">- Añada colaboradores a su equipo</li>
        <li className="text-sm text-gray-600">- Resuelva las vulnerabilidades más fácil.</li>
        <li className="text-sm text-gray-600">- No hay un máximo de colaboradores.</li>
      </ul>
      
      <button className="text-sm text-red-500 font-medium">- Añadir un colaborador.</button>
      
      <div className="mt-6">
        <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
          <div>Email</div>
          <div>Member role</div>
        </div>
        
        <div className="space-y-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex justify-between text-sm">
              <div>{member.email}</div>
              <div className="text-gray-500">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;