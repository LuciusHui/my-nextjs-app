"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import {
  Box,
  Typography,
  Paper,
  CircularProgress,
  Grid
} from '@mui/material';

interface CoinDetails {
  name: string;
  symbol: string;
  price: string;
  volume_24h: string;
  delta_24h: string;
  delta_1h: string;
  rank: number;
  icon?: string;
}

export default function CoinPage() {
  const params = useParams();
  const [coinData, setCoinData] = useState<CoinDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(`/api/coins/details?symbol=${params.symbol}`);
        const data = await response.json();
        
        if (data.coin) {
          setCoinData(data.coin);
        } else {
          setError('Coin not found');
        }
      } catch (err) {
        setError('Failed to fetch coin data');
      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [params.symbol]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !coinData) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: '1200px', margin: '0 auto' }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <img 
                src={coinData.icon}
                alt={coinData.name}
                style={{ width: '64px', height: '64px', marginRight: '16px' }}
              />
              <Box>
                <Typography variant="h4">{coinData.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{coinData.symbol}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" color="textSecondary">Price</Typography>
                <Typography variant="h6">${parseFloat(coinData.price).toFixed(2)}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" color="textSecondary">24h Volume</Typography>
                <Typography variant="h6">${parseFloat(coinData.volume_24h).toLocaleString()}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" color="textSecondary">24h Change</Typography>
                <Typography variant="h6" color={parseFloat(coinData.delta_24h) >= 0 ? 'success.main' : 'error.main'}>
                  {parseFloat(coinData.delta_24h) >= 0 ? '+' : ''}{coinData.delta_24h}%
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" color="textSecondary">Rank</Typography>
                <Typography variant="h6">#{coinData.rank}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
} 