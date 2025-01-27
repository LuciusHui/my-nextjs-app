import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchName = searchParams.get('name')?.toLowerCase();
  const API_KEY = process.env.NEXT_PUBLIC_COINLIB_API_KEY;

  try {
    const response = await fetch(
      `https://coinlib.io/api/v1/coinlist?key=${API_KEY}&pref=USD&page=1&per_page=100`
    );
    
    const data = await response.json();
    
    const coin = data.coins?.find((coin: any) => 
      coin.name.toLowerCase() === searchName || 
      coin.symbol.toLowerCase() === searchName
    );

    if (coin) {
      return NextResponse.json({ coin });
    } else {
      return NextResponse.json({ error: 'Coin not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to search coin' }, { status: 500 });
  }
} 