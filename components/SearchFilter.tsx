'use client';
import React from 'react';

interface Props {
  search: string;
  onSearch: (value: string) => void;
  departments: string[];
  selectedDepts: string[];
  toggleDept: (dept: string) => void;
  ratings: number[];
  selectedRatings: number[];
  toggleRating: (rating: number) => void;
}

const SearchFilter: React.FC<Props> = ({
  search,
  onSearch,
  departments,
  selectedDepts,
  toggleDept,
  ratings,
  selectedRatings,
  toggleRating,
}) => {
  return (
    <div className="space-y-4 w-full">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search by name, email or department"
        className="w-full px-4 py-2 border rounded shadow-sm"
      />

      <div className="flex flex-wrap gap-2">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => toggleDept(dept)}
            className={`px-3 py-1 rounded ${
              selectedDepts.includes(dept)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {ratings.map((r) => (
          <button
            key={r}
            onClick={() => toggleRating(r)}
            className={`px-3 py-1 rounded ${
              selectedRatings.includes(r)
                ? 'bg-yellow-500 text-black'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
            }`}
          >
            {r}⭐
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
