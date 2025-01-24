import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Trending = () => {
  const markets = [
    { alias: 'hello.world/first', price: '100.00', volume: '1,000' },
    { alias: 'hello.world/second', price: '200.00', volume: '2,000' },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5">Market</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Alias</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {markets.map((market, index) => (
              <TableRow key={index}>
                <TableCell>{market.alias}</TableCell>
                <TableCell>{market.price}</TableCell>
                <TableCell>{market.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Trending;