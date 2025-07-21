'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type BookmarkContextType = {
  bookmarked: number[];
  toggleBookmark: (id: number) => void;
};

const BookmarkContext = createContext<BookmarkContextType | null>(null);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  const toggleBookmark = (id: number) => {
    setBookmarked(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarked, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const ctx = useContext(BookmarkContext);
  if (!ctx) throw new Error('useBookmarks must be used within BookmarkProvider');
  return ctx;
};
