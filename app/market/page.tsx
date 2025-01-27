"use client";

import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
  Pagination
} from '@mui/material';

interface CoinData {
  symbol: string;
  name: string;
  price: string;
  volume_24h: string;
  rank: number;
}

const MarketPage = () => {
  const [marketData, setMarketData] = useState<CoinData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 50;

  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        const response = await fetch(`/api/coins/all?page=${page}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMarketData(data.coins);
      } catch (err) {
        setError('Error fetching market data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllCoins();
  }, [page]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Cryptocurrency Market
      </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Volume (24h)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {marketData.map((coin) => (
              <TableRow key={coin.symbol}>
                <TableCell>{coin.rank}</TableCell>
                <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <img 
                    src={`/images/${coin.symbol.toLowerCase()}.png`}
                    alt={coin.symbol}
                    style={{ width: 32, height: 32 }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/default-coin.png"
                    }}
                  />
                  {coin.name}
                </TableCell>
                <TableCell align="right">${parseFloat(coin.price).toFixed(2)}</TableCell>
                <TableCell align="right">${parseFloat(coin.volume_24h).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination 
          count={10} // Adjust based on total number of coins
          page={page}
          onChange={(_, newPage) => setPage(newPage)}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default MarketPage; 