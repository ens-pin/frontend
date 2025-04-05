import { NextResponse } from 'next/server';

const API_URL = 'http://192.168.103.67:42069';

/**
 * GET /api/hosted
 * Gets the list of hosted users
 */
export async function GET() {
  try {
    const response = await fetch(`${API_URL}/hosted`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch hosted users: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching hosted users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hosted users' },
      { status: 500 }
    );
  }
}
