'use client';
import {useState, useMemo} from "react"
import { Label, Pie, PieChart, Line, LineChart, Cell, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const nodeIsOnline = true; // This would be replaced with actual Docker node status check

const pieChartData = nodeIsOnline 
  ? [{ status: "Online", value: 100, fill: "#22c55e" }]  // Online state
  : [{ status: "Offline", value: 100, fill: "#ef4444" }]; // Offline state

const lineChartData = [
  { month: "January", pinnedHash: 186 },
  { month: "February", pinnedHash: 305 },
  { month: "March", pinnedHash: 237 },
  { month: "April", pinnedHash: 273 },
  { month: "May", pinnedHash: 209 },
  { month: "June", pinnedHash: 214 },
  { month: "July", pinnedHash: 253 },
  { month: "August", pinnedHash: 328 },
  { month: "September", pinnedHash: 298 },
  { month: "October", pinnedHash: 265 },
  { month: "November", pinnedHash: 289 },
  { month: "December", pinnedHash: 300 }
]

const pieChartConfig = {
  devices: {
    label: "Node Status",
  },
  online: {
    label: "Online",
    color: "#22c55e",
  },
  offline: {
    label: "Offline",
    color: "#ef4444",
  },
} satisfies ChartConfig


const lineChartConfig = {
  pinnedHash: {
    label: "Pinned IPFS Hash",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const totalActiveDevices = useMemo(() => {
        return pieChartData[0]?.value === 100 ? "ONLINE" : "OFFLINE"
    }, [])
    

    // Tab content components
    const OverviewContent = () => (
        <>
            <h1 className="text-4xl font-bold mb-6 text-white">Dashboard Overview</h1>
            <div className="bg-black p-6 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-semibold mb-8 text-gray-300">IPFS Node Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-b md:border-b-0 md:border-r border-gray-800 pb-4 md:pb-0 md:pr-4">
                        <p className="text-gray-400 text-xl mb-1 text-center">Total IPFS Hash Pinned</p>
                        <ChartContainer config={lineChartConfig}>
                          <LineChart
                            accessibilityLayer
                            data={lineChartData}
                            margin={{
                              left: 12,
                              right: 12,
                            }}
                          >
                            <CartesianGrid vertical={false} />
                            <XAxis
                              dataKey="month"
                              tickLine={false}
                              axisLine={false}
                              tickMargin={8}
                              tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                              cursor={false}
                              content={<ChartTooltipContent hideLabel />}
                            />
                            <Line
                              dataKey="pinnedHash"
                              type="linear"
                              stroke="#60a5fa"
                              strokeWidth={2}
                              dot={false}
                            />
                          </LineChart>
                        </ChartContainer>
                    </div>
                    <div className="md:pl-4">
                        <p className="text-gray-400 mb-2 text-xl text-center">Node Status</p>
                        <ChartContainer
                            config={pieChartConfig}
                            className="mx-auto aspect-square max-h-[250px]"
                          >
                            <PieChart>
                              <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                              />
                              <Pie
                                data={pieChartData}
                                dataKey="value"
                                nameKey="status"
                                innerRadius={60}
                                strokeWidth={5}
                              >
                                {pieChartData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                                <Label
                                  value={totalActiveDevices}
                                  position="center"
                                  style={{ 
                                    fill: nodeIsOnline ? '#22c55e' : '#ef4444', 
                                    fontSize: '24px', 
                                    fontWeight: 'bold' 
                                  }}
                                />
                              </Pie>
                            </PieChart>
                          </ChartContainer>
                    </div>
                </div>
            </div>
        </>
    );

    const DevicesContent = () => (
        <>
            <h1 className="text-4xl font-bold mb-6 text-white">Devices</h1>
            <div className="bg-black p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">Connected Devices</h3>
                <div className="space-y-4">
                    <div className="border-b border-gray-800 pb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-300 font-medium">Smart Thermostat</p>
                                <p className="text-sm text-gray-500">Living Room</p>
                            </div>
                            <span className="text-green-400">Online</span>
                        </div>
                    </div>
                    <div className="border-b border-gray-800 pb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-300 font-medium">Security Camera</p>
                                <p className="text-sm text-gray-500">Front Door</p>
                            </div>
                            <span className="text-green-400">Online</span>
                        </div>
                    </div>
                    <div className="border-b border-gray-800 pb-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-300 font-medium">Smart Light</p>
                                <p className="text-sm text-gray-500">Bedroom</p>
                            </div>
                            <span className="text-red-400">Offline</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-300 font-medium">Smart Lock</p>
                                <p className="text-sm text-gray-500">Garage Door</p>
                            </div>
                            <span className="text-green-400">Online</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    const ReportsContent = () => (
        <>
            <h1 className="text-4xl font-bold mb-6 text-white">Reports</h1>
            <div className="space-y-6">
                <div className="bg-black p-6 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-4 text-gray-300">Recent Reports</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                            <span className="text-gray-300">Q4 Financial Summary</span>
                            <span className="text-sm text-gray-500">Dec 31, 2023</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                            <span className="text-gray-300">Annual Performance Review</span>
                            <span className="text-sm text-gray-500">Dec 15, 2023</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300">Marketing Campaign Results</span>
                            <span className="text-sm text-gray-500">Nov 30, 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    const SettingsContent = () => (
        <>
            <h1 className="text-4xl font-bold mb-6 text-white">Settings</h1>
            <div className="bg-black p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">Account Settings</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                        <div>
                            <p className="font-medium text-gray-300">Notifications</p>
                            <p className="text-sm text-gray-500">Manage your notification preferences</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Configure</button>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                        <div>
                            <p className="font-medium text-gray-300">Privacy</p>
                            <p className="text-sm text-gray-500">Control your privacy settings</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Manage</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-gray-300">Security</p>
                            <p className="text-sm text-gray-500">Update your security preferences</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Review</button>
                    </div>
                </div>
            </div>
        </>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewContent />;
            case 'devices':
                return <DevicesContent />;
            case 'reports':
                return <ReportsContent />;
            case 'settings':
                return <SettingsContent />;
            default:
                return <OverviewContent />;
        }
    };

    return (
        <div className="min-h-screen flex bg-black">
            {/* Sidebar */}
            <div className={`bg-black text-white w-64 fixed h-full transition-transform duration-300 ease-in-out border-r border-gray-800 ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0`}>
                <div className="p-4">
                    <h2 className="text-2xl font-semibold text-white">Dashboard Menu</h2>
                    <nav className="mt-8">
                        <ul className="space-y-2">
                            <li 
                                className={`p-2 rounded cursor-pointer ${activeTab === 'overview' ? 'text-white' : 'hover:bg-gray-900'}`}
                                onClick={() => setActiveTab('overview')}
                            >
                                Overview
                            </li>
                            <li 
                                className={`p-2 rounded cursor-pointer ${activeTab === 'devices' ? 'text-white' : 'hover:bg-gray-900'}`}
                                onClick={() => setActiveTab('devices')}
                            >
                                Devices
                            </li>
                            <li 
                                className={`p-2 rounded cursor-pointer ${activeTab === 'reports' ? 'text-white' : 'hover:bg-gray-900'}`}
                                onClick={() => setActiveTab('reports')}
                            >
                                Reports
                            </li>
                            <li 
                                className={`p-2 rounded cursor-pointer ${activeTab === 'settings' ? 'text-white' : 'hover:bg-gray-900'}`}
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
                <header className="bg-black shadow-sm p-4 border-b border-gray-800">
                    <button 
                        onClick={toggleSidebar}
                        className="md:hidden p-2 rounded-md hover:bg-gray-900"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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