import { create } from 'zustand';

export interface OnboardingFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  companyWebsite?: string;
  companySize?: string;
  languagePreference?: string;
  verificationCode?: string;
  password?: string;
}

interface OnboardingState {
  currentStep: number;
  formData: OnboardingFormData;
  setFormData: (data: Partial<OnboardingFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetStore: () => void;
}

const TOTAL_STEPS = 4;

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