'use client';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useStore();
  const router = useRouter();

  const handleLogin = () => {
    if (username.trim()) {
      login(username, password);
      router.push('/');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white dark:bg-gray-800 shadow p-6 rounded space-y-4 w-full max-w-sm">
        <h2 className="text-lg font-bold">Mock Login</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter Password"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
