'use client';
import React from 'react';
import {
  ChartConfig,
} from "@/components/ui/chart";
import HostedUsersBubbleChart from './HostedUsersBubbleChart';

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
];

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
} satisfies ChartConfig;

const lineChartConfig = {
  pinnedHash: {
    label: "Pinned IPFS Hash",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const OverviewTab = () => {
  const totalActiveDevices = React.useMemo(() => {
    return pieChartData[0]?.value === 100 ? "ONLINE" : "OFFLINE";
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-white">Dashboard Overview</h1>
    
       <HostedUsersBubbleChart />
      
    </>
  );
}; 