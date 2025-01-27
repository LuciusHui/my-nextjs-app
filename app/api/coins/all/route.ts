import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  const perPage = '50'; // Increased number of coins per page
  const API_KEY = process.env.NEXT_PUBLIC_COINLIB_API_KEY;

  try {
    const response = await fetch(
      `https://coinlib.io/api/v1/coinlist?key=${API_KEY}&pref=USD&order=rank_asc&page=${page}&per_page=${perPage}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch coin data' }, { status: 500 });
  }
} 