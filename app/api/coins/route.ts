import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || '24h';
  const API_KEY = process.env.NEXT_PUBLIC_COINLIB_API_KEY;

  try {
    const response = await fetch(
      `https://coinlib.io/api/v1/coinlist?key=${API_KEY}&pref=USD&order=rank_asc&page=1&per_page=10`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    
    // Transform the data to include both 1h and 24h changes
    const transformedData = {
      ...data,
      coins: data.coins?.slice(0, 10).map((coin: any, index: number) => ({
        ...coin,
        rank: index + 1,
        delta_1h: coin.delta_1h || '0.00',
        delta_24h: coin.delta_24h || '0.00'
      }))
    };

    return NextResponse.json(transformedData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch coin data' }, { status: 500 });
  }
} 