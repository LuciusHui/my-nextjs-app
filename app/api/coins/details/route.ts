import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol')?.toLowerCase();
  const API_KEY = process.env.NEXT_PUBLIC_COINLIB_API_KEY;

  try {
    const response = await fetch(
      `https://coinlib.io/api/v1/coin?key=${API_KEY}&pref=USD&symbol=${symbol}`
    );
    
    const data = await response.json();
    
    if (data.symbol) {
      return NextResponse.json({ coin: data });
    } else {
      return NextResponse.json({ error: 'Coin not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch coin details' }, { status: 500 });
  }
} 