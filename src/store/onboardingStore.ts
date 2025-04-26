import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

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
  formData: Partial<OnboardingFormData>;
  setFormData: (data: Partial<OnboardingFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetStore: () => void;
}

const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      currentStep: 1,
      formData: {},
      setFormData: (data) => 
        set((state) => ({ 
          formData: { ...state.formData, ...data } 
        })),
      nextStep: () => 
        set((state) => ({ 
          currentStep: state.currentStep + 1 
        })),
      prevStep: () => 
        set((state) => ({ 
          currentStep: state.currentStep - 1 
        })),
      resetStore: () => 
        set({ 
          currentStep: 1, 
          formData: {} 
        }),
    }),
    {
      name: 'onboarding-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useOnboardingStore;