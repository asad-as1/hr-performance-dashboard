'use client';
import React from 'react';
import { getFullName } from '@/lib/utils';
import { useBookmarks } from '@/hooks/useBookmarks';
import { User } from '@/types/user';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const router = useRouter();

  const handleView = () => router.push(`/employee/${user.id}`);

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 space-y-2 w-full sm:w-80">
      <img
        src={user.image}
        alt={user.firstName}
        className="w-20 h-20 rounded-full object-cover mx-auto"
      />
      <div className="text-center">
        <h2 className="text-lg font-semibold">{getFullName(user.firstName, user.lastName)}</h2>
        <p className="text-sm text-gray-500">Email: {user.email}</p>
        <p className="text-sm text-gray-500">Age: {user.age}</p>
        <p className="text-sm text-gray-400">Department: {user.department}</p>
      </div>

      <div className="flex justify-center">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < user.rating ? (
              <FaStar className="text-yellow-400" />
            ) : (
              <FaRegStar className="text-gray-400" />
            )}
          </span>
        ))}
      </div>

      <div className="flex justify-between gap-2 pt-2">
        <button
          onClick={handleView}
          className="w-full py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View
        </button>
        <button
          onClick={() => toggleBookmark(user)}
          className="w-full py-1 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-500"
        >
          {isBookmarked(user.id) ? 'Bookmarked' : 'Bookmark'}
        </button>
        <button
          className="w-full py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
        >
          Promote
        </button>
      </div>
    </div>
  );
};

export default UserCard;
