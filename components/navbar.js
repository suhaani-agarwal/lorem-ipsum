import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { IconBell, IconUser } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-800 mt-0">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-rose-500 dark:text-rose-400">
              SukhSaheli
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium",
                "text-gray-700 hover:text-gray-900 hover:bg-gray-100",
                "dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
              )}
            >
             
              Login
            </Link>
            <button
              className={cn(
                "p-2 rounded-full",
                "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
                "dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
              )}
            >
              <IconBell className="h-6 w-6" />
            </button>
            <button
              className={cn(
                "p-2 rounded-full",
                "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
                "dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
              )}
            >
              <IconUser className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
