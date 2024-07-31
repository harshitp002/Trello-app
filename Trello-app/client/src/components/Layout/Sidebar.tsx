'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { clearUser } from '@/store/slices/authSlice';
import { removeToken, removeUser } from '@/utils/auth';
import { HomeIcon, ClipboardIcon, CogIcon, UserGroupIcon, ChartBarIcon, PlusIcon, ChevronDoubleRightIcon, BellIcon, SunIcon, UserCircleIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    removeToken();
    removeUser();
    dispatch(clearUser());
    router.push('/login');
  };

  const handleDownload = () => {
    console.log('Download clicked');
  };

  return (
    <div className="bg-white-800 text-gray-500 w-64 space-y-6 py-5 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex items-center space-x-4 px-4">
        <div className="flex flex-col items-center">
          {user && (
            <div>
              <div className='flex flex-row text-black '>
                <UserCircleIcon className='w-8 h-12 mr-2 ' />
                <span className='pt-3 text-lg font-medium '>{user.name}</span>
              </div>

              <div className='flex flex-row '>

                <BellIcon className='w-6 h-7 inline-block mr-2 pt-1' />
                <SunIcon className='w-6 h-7 inline-block mr-2 pt-1' />
                <ChevronDoubleRightIcon className='w-6 h-7 inline-block mr-2 pt-1' />

                <button
                  onClick={handleLogout}
                  className="text-gray-500  text-sm hover:text-gray-600  font-light flex flex-row  space-x-2 p-1  border border-gray-300 rounded border-transparent bg-gray-100 ml-16"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <nav>
        <Link href="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-gray-400">
          <HomeIcon className="w-5 h-5 inline-block mr-2" />
          Home
        </Link>
        <Link href="/boards" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-gray-400">
          <ClipboardIcon className="w-5 h-5 inline-block mr-2" />
          Boards
        </Link>
        <Link href="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-gray-400">
          <CogIcon className="w-5 h-5 inline-block mr-2" />
          Settings
        </Link>
        <Link href="/teams" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-gray-400">
          <UserGroupIcon className="w-5 h-5 inline-block mr-2" />
          Teams
        </Link>
        <Link href="/analytics" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-gray-400">
          <ChartBarIcon className="w-5 h-5 inline-block mr-2" />
          Analytics
        </Link>
      </nav>
      <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg w-full flex items-center justify-center ">
        <p>Create new task</p>
        <PlusIcon className="text-purple-600 w-5 h-5 ml-2 bg-white border rounded-xl border-transparent " />
      </button>

      <div className="flex grow h-72"></div>

      <button onClick={handleDownload} className="flex items-center py-2 px-4 rounded-lg w-full bg-gray-100 hover:bg-gray-200">
        <ArrowDownTrayIcon className="h-6 w-6 mr-2" />
        <div className='flex flex-col items-start text-gray-600'>
          <p className="text-sm font-medium">Download the app</p>
          <p className="text-xs">Get the full experience</p>
        </div>
      </button>
      </div>
   
  )
}

export default Sidebar