import React from 'react';
import { Input } from '../../components/common';

interface PersonalDetailsStepProps {
  // Add props for form state and handlers later if needed
}

const PersonalDetailsStep: React.FC<PersonalDetailsStepProps> = () => {
  return (
    <form>
      <p className="text-sm text-gray-600 mb-4">
        Bienvenido. Codefend es una plataforma completa para pentest continuo, detección temprana de amenazas, y protección de assets e infrastructura, empleando una red de hackers decentralizada especializados en diversas áreas.
      </p>
      <h3 className="text-md font-semibold text-gray-700 mb-3">Personal details:</h3>
      <Input
        id="firstName"
        name="firstName"
        label="First name"
        placeholder="Enter your first name"
        required
      />
      <Input
        id="lastName"
        name="lastName"
        label="Last name"
        placeholder="Enter your last name"
        required
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="Professional email"
        placeholder="Enter your professional email"
        required
      />
      {/* Basic phone input - enhance later if needed */}
      <Input
        id="phone"
        name="phone"
        type="tel"
        label="Phone number"
        placeholder="+54 ..." // Add country code selector later
        required
      />
      {/* Buttons will be handled by the parent OnboardingPage */}
    </form>
  );
};

export default PersonalDetailsStep;