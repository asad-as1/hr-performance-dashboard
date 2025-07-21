import { create } from 'zustand';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  image: string;
  department: string;
  rating: number;
  address: string;
  phone: string;
  bio: string;
  history: number[];
}

interface State {
  darkMode: boolean;
  currentUser: string | null;
  bookmarks: User[]; // ✅ New field
  toggleTheme: () => void;
  login: (username: string) => void;
  logout: () => void;
  toggleBookmark: (user: User) => void; // ✅ New action
}

export const useStore = create<State>((set, get) => ({
  darkMode:
    typeof window !== 'undefined'
      ? localStorage.getItem('darkMode') === 'true'
      : false,

  currentUser:
    typeof window !== 'undefined' ? localStorage.getItem('user') : null,

  bookmarks: [], // ✅ Initialize bookmarks with empty array

  toggleTheme: () => {
    set((state) => {
      const newMode = !state.darkMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', newMode.toString());
        document.documentElement.classList.toggle('dark', newMode);
      }
      return { darkMode: newMode };
    });
  },

  login: (username: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', username);
    }
    set({ currentUser: username });
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    set({ currentUser: null });
  },

  toggleBookmark: (user: User) => {
    const { bookmarks } = get();
    const exists = bookmarks.some((u) => u.id === user.id);

    const updated = exists
      ? bookmarks.filter((u) => u.id !== user.id)
      : [...bookmarks, user];

    set({ bookmarks: updated });
  },
}));
