import { useStore } from '@/store/useStore';

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

export const useBookmarks = () => {
  const bookmarks = useStore((state) => state.bookmarks) || [];
  const toggleBookmark = useStore((state) => state.toggleBookmark);

  const isBookmarked = (id: number) => {
    return bookmarks.some((user: User) => user.id === id);
  };

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked,
  };
};
