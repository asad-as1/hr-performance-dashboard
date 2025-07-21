import { useState } from 'react';
import { User } from '@/types/user';

export const useSearch = (users: User[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number[]>([]);

  const filteredUsers = users.filter(user => {
    const matchesSearch =
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept =
      departmentFilter.length === 0 || departmentFilter.includes(user.department);

    const matchesRating =
      ratingFilter.length === 0 || ratingFilter.includes(user.rating);

    return matchesSearch && matchesDept && matchesRating;
  });

  return {
    searchTerm,
    setSearchTerm,
    departmentFilter,
    setDepartmentFilter,
    ratingFilter,
    setRatingFilter,
    filteredUsers,
  };
};
