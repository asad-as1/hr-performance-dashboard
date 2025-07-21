'use client';
import { useState } from 'react';

export default function CreateUserPage() {
  const [form, setForm] = useState({ first: '', last: '', email: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Create New User</h1>
      <form className="space-y-4">
        <input
          name="first"
          placeholder="First Name"
          value={form.first}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="last"
          placeholder="Last Name"
          value={form.last}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          onClick={(e) => e.preventDefault()}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Create (Mock)
        </button>
      </form>
    </div>
  );
}
