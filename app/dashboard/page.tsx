'use client';
import { useState } from 'react';

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen flex bg-gray-50">
            {/* Sidebar */}
            <div className={`bg-white text-gray-800 w-64 fixed h-full transition-transform duration-300 ease-in-out border-r ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0`}>
                <div className="p-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Dashboard Menu</h2>
                    <nav className="mt-8">
                        <ul className="space-y-2">
                            <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Overview</li>
                            <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Analytics</li>
                            <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Reports</li>
                            <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Settings</li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 md:ml-64">
                {/* Header */}
                <header className="bg-white shadow-sm p-4 border-b">
                    <button 
                        onClick={toggleSidebar}
                        className="md:hidden p-2 rounded-md hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </header>

                {/* Dashboard Content */}
                <main className="p-8">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">Dashboard Overview</h1>
                    
                    {/* Dashboard Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">Total Users</h3>
                            <p className="text-3xl font-bold text-gray-800">10,234</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">Revenue</h3>
                            <p className="text-3xl font-bold text-gray-800">$45,678</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">Active Projects</h3>
                            <p className="text-3xl font-bold text-gray-800">25</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}