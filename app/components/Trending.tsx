"use client";

import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Trending = () => {
  const trendingData = [
    { alias: 'Alias 1', price: '100.00', volume: '2000', time: '24h' },
    { alias: 'Alias 2', price: '150.00', volume: '2500', time: '24h' },
    { alias: 'Alias 3', price: '80.00', volume: '1800', time: '24h' },
    { alias: 'Alias 4', price: '120.00', volume: '2200', time: '24h' },
    { alias: 'Alias 5', price: '200.00', volume: '3000', time: '24h' },
    { alias: 'Alias 6', price: '90.00', volume: '1600', time: '24h' },
    { alias: 'Alias 7', price: '110.00', volume: '2100', time: '24h' },
    { alias: 'Alias 8', price: '130.00', volume: '2400', time: '24h' },
    { alias: 'Alias 9', price: '170.00', volume: '2800', time: '24h' },
    { alias: 'Alias 10', price: '60.00', volume: '1400', time: '24h' },
  ];

  return (
    <Box sx={{ padding: '20px', backgroundColor: 'white', color: 'black' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Market
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        Trending
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650, backgroundColor: 'White' }}>
          <TableHead>
            <TableRow>
              <TableCell>Alias</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Volume</TableCell>
              <TableCell align="right">24h</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trendingData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.alias}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.volume}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Trending;