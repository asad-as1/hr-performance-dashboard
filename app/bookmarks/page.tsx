'use client';
import React from 'react';
import { useBookmarks } from '@/hooks/useBookmarks';
import UserCard from '@/components/UserCard';


export default function BookmarksPage() {
  const { bookmarks } = useBookmarks();

  return (
    <div className="flex flex-col sm:flex-row">
      <main className="flex-1 p-4">
        <h1 className="text-xl font-bold mb-4">Bookmarked Employees</h1>
        {bookmarks.length === 0 ? (
          <p>No bookmarks yet.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {bookmarks.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
