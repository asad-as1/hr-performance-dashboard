'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { classNames } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'Bookmarks', href: '/bookmarks' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Create User', href: '/create-user' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full sm:w-60 bg-gray-200 dark:bg-gray-900 p-4 min-h-screen">
      <nav className="flex flex-col gap-3">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              'px-4 py-2 rounded text-sm font-medium',
              pathname === item.href
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
