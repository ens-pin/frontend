'use client';
import React, { useState, useEffect } from 'react';

interface StorageUsage {
  total: number;
  used: number;
  available: number;
  percentage: number;
}

interface BandwidthUsage {
  upload: number;
  download: number;
  total: number;
}

interface NodeUsageData {
  id: string;
  storage: StorageUsage;
  bandwidth: BandwidthUsage;
  connections: number;
  pinned_files: number;
}

interface NodeUsageProps {
  nodeId: string;
  nodeName: string;
}

export function NodeUsage({ nodeId, nodeName }: NodeUsageProps) {
  const [usage, setUsage] = useState<NodeUsageData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetchNodeUsage();
  }, [nodeId]);

  const fetchNodeUsage = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/nodes/${nodeId}/`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch node usage: ${response.status}`);
      }
      
      const data = await response.json();
      setUsage(data);
    } catch (err) {
      console.error('Error fetching node usage:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="mt-2 bg-gray-900/50 p-3 rounded-md">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium text-gray-300">Storage Usage</h4>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-gray-400 hover:text-gray-300"
        >
          {expanded ? 'Less Details' : 'More Details'}
        </button>
      </div>
      
      {isLoading ? (
        <div className="animate-pulse h-4 bg-gray-700 rounded"></div>
      ) : error ? (
        <p className="text-xs text-red-400">{error}</p>
      ) : usage ? (
        <div>
          <div className="h-2 bg-gray-700 rounded overflow-hidden mb-1">
            <div 
              className="h-full bg-blue-500 transition-all duration-500 ease-in-out" 
              style={{ width: `${usage.storage.percentage}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-400">
            <span>{formatBytes(usage.storage.used)} used</span>
            <span>{usage.storage.percentage}%</span>
            <span>{formatBytes(usage.storage.total)} total</span>
          </div>
          
          {expanded && (
            <div className="mt-4 space-y-3">
              <div>
                <h5 className="text-xs font-medium text-gray-400 mb-1">Bandwidth</h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-gray-800 p-2 rounded">
                    <span className="text-gray-400">Upload:</span>
                    <span className="float-right text-green-400">{formatBytes(usage.bandwidth.upload)}</span>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <span className="text-gray-400">Download:</span>
                    <span className="float-right text-blue-400">{formatBytes(usage.bandwidth.download)}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-800 p-2 rounded">
                  <span className="text-gray-400">Active Connections:</span>
                  <span className="float-right text-white">{usage.connections}</span>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <span className="text-gray-400">Pinned Files:</span>
                  <span className="float-right text-white">{usage.pinned_files}</span>
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                <button 
                  onClick={fetchNodeUsage}
                  className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600"
                >
                  Refresh
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="text-xs text-gray-500">No usage data available</p>
      )}
    </div>
  );
} 