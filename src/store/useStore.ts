import { create } from 'zustand';

// This defines the strict rules for our environments
interface AppState {
  currentEnvironment: string;
  setEnvironment: (env: string) => void;
}

// This creates the global brain that any component can talk to
export const useStore = create<AppState>((set) => ({
  currentEnvironment: 'main', // Default environment when the app loads
  setEnvironment: (env) => set({ currentEnvironment: env }),
}));
