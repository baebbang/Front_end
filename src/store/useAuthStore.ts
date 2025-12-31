import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  user: { name: string; id: string } | null;
  login: (userData: { name: string; id: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  login: (userData) => set({ isLoggedIn: true, user: userData }),
  logout: () => set({ isLoggedIn: false, user: null }),
}));