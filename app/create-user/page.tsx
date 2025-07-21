'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

type FormState = {
  first: string;
  last: string;
  email: string;
};

export default function CreateUserPage() {
  const [form, setForm] = useState<FormState>({ first: '', last: '', email: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted form:', form);
    // You can integrate your API call here
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Create New User</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
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
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Create (Mock)
        </button>
      </form>
    </div>
  );
}
