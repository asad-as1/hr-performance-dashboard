'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Tabs from '@/components/Tabs';
import { fetchUsers } from '@/lib/fetchUsers';
import { getAverage } from '@/lib/utils';
import Image from 'next/image';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  address?: string;
  phone?: string;
  department?: string;
  bio?: string;
  history?: number[];
};

export default function EmployeeDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchUsers().then((users) => {
      const found = users.find((u) => u.id === Number(id)); // ✅ Removed `any`
      setUser(found || null);
    });
  }, [id]);

  if (!user) return <p className="p-4">Loading...</p>;

  const tabs = [
    {
      label: 'Overview',
      content: (
        <div>
          <p className="mb-2">{user.bio || 'No bio provided.'}</p>
          <p><strong>Address:</strong> {user.address || 'N/A'}</p>
          <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
        </div>
      ),
    },
    {
      label: 'Projects',
      content: (
        <ul className="list-disc pl-5">
          <li>Project A: Internal Tools</li>
          <li>Project B: Dashboard Revamp</li>
        </ul>
      ),
    },
    {
      label: 'Feedback',
      content: (
        <form className="space-y-3">
          <textarea
            placeholder="Write feedback..."
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      ),
    },
  ];

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-4">
      <Image
        width={100}
        height={100}
        src={user.image || '/default-profile.png'}
        alt={`${user.firstName} ${user.lastName}`}
        className="w-32 h-32 object-cover rounded-full"
      />
      <h1 className="text-2xl font-bold">Name: {user.firstName} {user.lastName}</h1>
      <p className="text-gray-500">Email: {user.email}</p>
      <p className="text-gray-500">Department: {user.department || 'N/A'}</p>
      <p><strong>Performance History:</strong> {user.history?.join(', ') || 'No history available'}</p>
      <p><strong>Average Rating:</strong> {getAverage(user.history || [])}</p>
      <Tabs tabs={tabs} />
    </div>
  );
}
