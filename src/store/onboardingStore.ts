import { create } from 'zustand';

// Exporta esta interfaz
export interface OnboardingFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  companyWebsite?: string;
  companySize?: string;
  languagePreference?: string;
  // Añadir campos para los siguientes pasos (código de confirmación, contraseña)
}

interface OnboardingState {
  currentStep: number;
  formData: OnboardingFormData;
  setFormData: (data: Partial<OnboardingFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetStore: () => void; // Para reiniciar si es necesario
}

const TOTAL_STEPS = 4; // Mantener sincronizado con la página

const useOnboardingStore = create<OnboardingState>((set) => ({
  currentStep: 1,
  formData: {},
  setFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data }
  })),
  nextStep: () => set((state) => ({
    currentStep: Math.min(state.currentStep + 1, TOTAL_STEPS)
  })),
  prevStep: () => set((state) => ({
    currentStep: Math.max(state.currentStep - 1, 1)
  })),
  resetStore: () => set({ currentStep: 1, formData: {} }),
}));

export default useOnboardingStore;