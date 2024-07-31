
'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '@/components/Layout/Sidebar';
import TaskBoard from '@/components/TaskBoard/TaskBoard';
import FeatureHighlight from '@/components/Dashboard/FeatureHighlight';
import ActionBar from '@/components/Dashboard/ActionBar';
import { TagIcon, ShareIcon, DevicePhoneMobileIcon,QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    const router = useRouter()
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login')
        }
    }, [isAuthenticated, router])

    if (!isAuthenticated) {
        return null
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <div className='bg-white'><Sidebar /></div>
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* <Header /> */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="container mx-auto px-6 py-8">
                        <div className='flex flex-row justify-between'>
                        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                            Good morning, {user?.name}!
                        </h1>
                        <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center pb-5">
                        
                            Help & feedback
                            <QuestionMarkCircleIcon className="w-5 h-5 mr-1 " />
                          </a>
                          </div>
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <FeatureHighlight
                                title="Introducing tags"
                                description="Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."
                                icon={<TagIcon className="h-8 w-8 text-purple-600" />}
                            />
                            <FeatureHighlight
                                title="Share Notes Instantly"
                                description="Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."
                                icon={<ShareIcon className="h-8 w-8 text-blue-600" />}
                            />
                            <FeatureHighlight
                                title="Access Anywhere"
                                description="Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer."
                                icon={<DevicePhoneMobileIcon className="h-8 w-8 text-green-600" />}
                            />
                        </div>
                        <ActionBar />
                        <TaskBoard />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;

