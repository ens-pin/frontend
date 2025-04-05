import { NextResponse } from 'next/server';

const API_URL = 'http://192.168.103.67:42069';

/**
 * GET /api/nodes/count
 * Gets the total count of all nodes
 */
export async function GET() {
  try {
    const response = await fetch(`${API_URL}/nodes/count`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch node count: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching node count:', error);
    return NextResponse.json(
      { error: 'Failed to fetch node count' },
      { status: 500 }
    );
  }
} 