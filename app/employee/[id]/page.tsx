'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Tabs from '@/components/Tabs';
import { fetchUsers } from '@/lib/fetchUsers';
import { getAverage } from '@/lib/utils';

export default function EmployeeDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchUsers().then((users) => {
      const found = users.find((u: any) => u.id === Number(id));
      setUser(found);
    });
  }, [id]);

  if (!user) return <p className="p-4">Loading...</p>;

  const tabs = [
    {
      label: 'Overview',
      content: (
        <div>
          <p className="mb-2">{user.bio}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
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
      <img src={user.image} alt="" />
      <h1 className="text-2xl font-bold">Name: {user.firstName} {user.lastName}</h1>
      <p className="text-gray-500">Email: {user.email}</p>
      <p className="text-gray-500">Department: {user.department}</p>
      <p><strong>Performance History:</strong> {user.history.join(', ')}</p>
      <p><strong>Average Rating:</strong> {getAverage(user.history)}</p>
      <Tabs tabs={tabs} />
    </div>
  );
}
