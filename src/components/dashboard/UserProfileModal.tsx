import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OnboardingFormData } from '../../store/onboardingStore';
import useOnboardingStore from '../../store/onboardingStore';
import { Button } from '../common'; 
import './styles/_userProfileModal.scss'; 

interface UserProfileModalProps {
  userData: Partial<OnboardingFormData>;
  onClose: () => void;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({ userData, onClose }) => {
  const navigate = useNavigate();
  const { resetStore } = useOnboardingStore();
  
  const handleLogout = () => {
    resetStore();
    onClose();
    navigate('/onboarding');
  };
  
  const fieldLabels: { [key in keyof OnboardingFormData]?: string } = {
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    companyName: 'Nombre de la empresa',
    companyWebsite: 'Sitio web',
    companySize: 'Tamaño de la empresa',
    languagePreference: 'Idioma',
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Perfil de Usuario</h2>
        </div>
        <div className="modal-body">
          {Object.entries(userData)
            .filter(([key]) => fieldLabels[key as keyof OnboardingFormData])
            .map(([key, value]) => (
              <div key={key} className="modal-field">
                <span className="modal-field-label">{fieldLabels[key as keyof OnboardingFormData]}:</span>
                <span className="modal-field-value">{value || '-'}</span>
              </div>
            ))}
        </div>
        <div className="modal-footer">
          <Button onClick={handleLogout} className="modal-logout-button">
            Cerrar sesión
          </Button>
          <Button onClick={onClose}>
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;