'use client';
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '@/lib/fetchUsers';
import Chart from '@/components/Chart';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function AnalyticsPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const deptRatings: { [key: string]: number[] } = {};

  users.forEach((user: any) => {
    if (!deptRatings[user.department]) deptRatings[user.department] = [];
    deptRatings[user.department].push(user.rating);
  });

  const labels = Object.keys(deptRatings);
  const data = labels.map((dept) =>
    deptRatings[dept].reduce((a, b) => a + b, 0) / deptRatings[dept].length
  );

  return (
    <div className="flex flex-col sm:flex-row">
      <main className="flex-1 p-4">
        <h1 className="text-xl font-bold mb-4">Analytics</h1>
        <Chart labels={labels} data={data} title="Avg Ratings per Department" />
      </main>
    </div>
  );
}
