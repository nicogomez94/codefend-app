import React from 'react';
import { OnboardingFormData } from '../../store/onboardingStore';
import { Button } from '../common'; 
import './styles/_userProfileModal.scss'; 

interface UserProfileModalProps {
  userData: Partial<OnboardingFormData>; // Usa Partial por si no todos los datos están llenos
  onClose: () => void;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({ userData, onClose }) => {
  // Mapeo de claves a etiquetas legibles (opcional, para mejor presentación)
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
    <div className="modal-overlay" onClick={onClose}> {/* Overlay para cerrar al hacer clic fuera */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Evita que el clic en el contenido cierre el modal */}
        <div className="modal-header">
          <h2>Perfil de Usuario</h2>
          <Button variant="primary" onClick={onClose} className="modal-close-button">
            &times; {/* Icono de cierre (puedes usar un SVG) */}
          </Button>
        </div>
        <div className="modal-body">
          {Object.entries(userData)
            .filter(([key]) => fieldLabels[key as keyof OnboardingFormData]) // Filtra campos no deseados
            .map(([key, value]) => (
              <div key={key} className="modal-field">
                <span className="modal-field-label">{fieldLabels[key as keyof OnboardingFormData]}:</span>
                <span className="modal-field-value">{value || '-'}</span> {/* Muestra '-' si el valor está vacío */}
              </div>
          ))}
        </div>
        <div className="modal-footer">
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;