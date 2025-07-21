// lib/fetchUsers.ts
import { User } from '../types/user';

type ApiUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  image?: string;
  address?: {
    address: string;
    city: string;
  };
  phone: string;
};

type ApiResponse = {
  users: ApiUser[];
};

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://dummyjson.com/users?limit=20', {
    cache: 'no-store',
  });

  const data: ApiResponse = await res.json();

  const departments = ['Engineering', 'Marketing', 'HR', 'Sales', 'Design'];

  const users: User[] = data.users.map((user) => {
    const department = departments[Math.floor(Math.random() * departments.length)];

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      image: user.image || `https://randomuser.me/api/portraits/men/${user.id}.jpg`,
      department,
      rating: Math.floor(Math.random() * 5) + 1,
      address: `${user.address?.address}, ${user.address?.city}`,
      phone: user.phone,
      bio: `A hard-working ${user.firstName} from the ${department} department.`,
      history: Array.from({ length: 5 }, () => Math.floor(Math.random() * 5) + 1),
    };
  });

  return users;
};
