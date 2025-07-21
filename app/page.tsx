'use client';
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '@/lib/fetchUsers';
import UserCard from '@/components/UserCard';
import SearchFilter from '@/components/SearchFilter';
import { useSearch } from '@/hooks/useSearch';
import { User } from '../types/user'; // ✅ Importing User type
// import Header from '@/components/Header';
// import Sidebar from '@/components/Sidebar';

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]); // ✅ Typed state
  const departments = ['Engineering', 'Marketing', 'HR', 'Sales', 'Design'];
  const ratings = [1, 2, 3, 4, 5];

  const {
    searchTerm,
    setSearchTerm,
    departmentFilter,
    setDepartmentFilter,
    ratingFilter,
    setRatingFilter,
    filteredUsers,
  } = useSearch(users); // useSearch should return User[] as well

  useEffect(() => {
    fetchUsers().then(setUsers); // fetchUsers should return Promise<User[]>
  }, []);

  const toggleDept = (dept: string) =>
    setDepartmentFilter(prev =>
      prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept]
    );

  const toggleRating = (r: number) =>
    setRatingFilter(prev =>
      prev.includes(r) ? prev.filter(n => n !== r) : [...prev, r]
    );

  return (
    <div className="flex flex-col sm:flex-row">
      {/* <Sidebar /> */}
      <main className="flex-1 p-4 space-y-4">
        {/* <Header /> */}

        <SearchFilter
          search={searchTerm}
          onSearch={setSearchTerm}
          departments={departments}
          selectedDepts={departmentFilter}
          toggleDept={toggleDept}
          ratings={ratings}
          selectedRatings={ratingFilter}
          toggleRating={toggleRating}
        />

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers?.length > 0 ? (
            filteredUsers.map((user: User) => ( // ✅ Typed user
              <UserCard key={user.id} user={user} />
            ))
          ) : (
            <p className="text-gray-500">No users found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
