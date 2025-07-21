export const fetchUsers = async () => {
  const res = await fetch('https://dummyjson.com/users?limit=20');
  const data = await res.json();

  const departments = ['Engineering', 'Marketing', 'HR', 'Sales', 'Design'];

  const users = data.users.map((user: any) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    age: user.age,
    image: user.image || `https://randomuser.me/api/portraits/men/${user.id}.jpg`,
    department: departments[Math.floor(Math.random() * departments.length)],
    rating: Math.floor(Math.random() * 5) + 1,
    address: `${user.address?.address}, ${user.address?.city}`,
    phone: user.phone,
    bio: `A hard-working ${user.firstName} from the ${departments[Math.floor(Math.random() * departments.length)]} department.`,
    history: Array.from({ length: 5 }, () => Math.floor(Math.random() * 5) + 1),
  }));

  return users;
};
