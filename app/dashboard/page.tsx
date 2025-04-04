'use client';
import { useState } from 'react';

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Tab content components
    const OverviewContent = () => (
        <>
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Dashboard Overview</h1>
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
        </>
    );

    const AnalyticsContent = () => (
        <>
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Analytics</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Performance Metrics</h3>
                <div className="space-y-4">
                    <div className="border-b pb-4">
                        <p className="text-gray-600">Monthly Growth</p>
                        <p className="text-2xl font-bold text-green-600">+15.8%</p>
                    </div>
                    <div className="border-b pb-4">
                        <p className="text-gray-600">User Engagement</p>
                        <p className="text-2xl font-bold text-blue-600">73%</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Conversion Rate</p>
                        <p className="text-2xl font-bold text-purple-600">4.2%</p>
                    </div>
                </div>
            </div>
        </>
    );

    const ReportsContent = () => (
        <>
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Reports</h1>
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Recent Reports</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-2">
                            <span className="text-gray-600">Q4 Financial Summary</span>
                            <span className="text-sm text-gray-500">Dec 31, 2023</span>
                        </div>
                        <div className="flex items-center justify-between border-b pb-2">
                            <span className="text-gray-600">Annual Performance Review</span>
                            <span className="text-sm text-gray-500">Dec 15, 2023</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Marketing Campaign Results</span>
                            <span className="text-sm text-gray-500">Nov 30, 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    const SettingsContent = () => (
        <>
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Settings</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Account Settings</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                        <div>
                            <p className="font-medium text-gray-800">Notifications</p>
                            <p className="text-sm text-gray-500">Manage your notification preferences</p>
                        </div>
                        <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">Configure</button>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                        <div>
                            <p className="font-medium text-gray-800">Privacy</p>
                            <p className="text-sm text-gray-500">Control your privacy settings</p>
                        </div>
                        <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">Manage</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-800">Security</p>
                            <p className="text-sm text-gray-500">Update your security preferences</p>
                        </div>
                        <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">Review</button>
                    </div>
                </div>
            </div>
        </>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewContent />;
            case 'analytics':
                return <AnalyticsContent />;
            case 'reports':
                return <ReportsContent />;
            case 'settings':
                return <SettingsContent />;
            default:
                return <OverviewContent />;
        }
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
                            <li 
                                className={`p-2 rounded cursor-pointer ${activeTab === 'overview' ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-100'}`}
                                onClick={() => setActiveTab('overview')}
                            >
                                Overview
                            </li>
                            <li 
                                className={`p-2 rounded cursor-pointer ${activeTab === 'analytics' ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-100'}`}
                                onClick={() => setActiveTab('analytics')}
                            >
                                Analytics
                            </li>
                            <li 
                                className={`p-2 rounded cursor-pointer ${activeTab === 'reports' ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-100'}`}
                                onClick={() => setActiveTab('reports')}
                            >
                                Reports
                            </li>
                            <li 
                                className={`p-2 rounded cursor-pointer ${activeTab === 'settings' ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-100'}`}
                                onClick={() => setActiveTab('settings')}
                            >
                                Settings
                            </li>
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
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}