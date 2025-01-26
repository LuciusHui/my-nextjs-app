"use client";

import * as React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface MarketItem {
  id: number;
  alias: string;
  price: number;
  volume: number;
}

//10 Arraylist of mock data
const Trending: React.FC = () => {
  const marketData: MarketItem[] = [
    { id: 1, alias: 'helloworldtestinghellow', price: 100, volume: 100 },
    { id: 2, alias: 'helloworldtestinghellow', price: 100, volume: 100 },
    { id: 3, alias: 'helloworldtestinghellow', price: 100, volume: 100 },
    { id: 4, alias: 'helloworldtestinghellow', price: 100, volume: 100 },
    { id: 5, alias: 'helloworldtestinghellow', price: 100, volume: 100 },
    { id: 6, alias: 'helloworldtestinghellow', price: 100, volume: 100 },
    { id: 7, alias: 'helloworldtestinghellow', price: 100, volume: 100 },
    { id: 8, alias: 'helloworldtestinghellow', price: 100, volume: 100 },
    { id: 9, alias: 'helloworldtestinghellow', price: 100, volume: 100 },
    { id: 10, alias: 'helloworldtestinghellow', price: 100, volume: 100 },
  ];

  const leftSideData = marketData.slice(0, 5);
  const rightSideData = marketData.slice(5);
  
  // State to manage the active view
  const [activeView, setActiveView] = React.useState<'Trending' | 'Top'>('Trending');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // Toggle button handler
  const handleToggle = (event: React.MouseEvent<HTMLElement>, newView: 'Trending' | 'Top') => {
    if (newView !== null) {
      setActiveView(newView);
    }
  };

  // Handle menu open/close , only open is shown in this case
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Define CSS for the market
  return (
    <Box sx={{ mt: 8, bgcolor: 'white', p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Market</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <ToggleButtonGroup
          value={activeView}
          exclusive
          onChange={handleToggle}
          sx={{ borderRadius: '25px', bgcolor: 'white', flexGrow: 1 }}
        >
          <ToggleButton
            value="Trending"
            sx={{
              border: '1px solid gray',
              color: activeView === 'Trending' ? 'white' : 'black',
              bgcolor: activeView === 'Trending' ? '#007bff' : 'white',
              borderRadius: '25px 0 0 25px',
              width: '150px',
              height: '36px',
            }}
          >
            {activeView === 'Trending' && <CheckIcon sx={{ mr: 1 }} />}
            Trending
          </ToggleButton>
          <ToggleButton
            value="Top"
            sx={{
              border: '1px solid gray',
              color: activeView === 'Top' ? 'white' : 'black',
              bgcolor: activeView === 'Top' ? '#007bff' : 'white',
              borderRadius: '0 25px 25px 0',
              width: '150px',
              height: '36px',
            }}
          >
            {activeView === 'Top' && <CheckIcon sx={{ mr: 1 }} />}
            Top
          </ToggleButton>
        </ToggleButtonGroup>
        <Button
          variant="outlined"
          sx={{
            ml: 2,
            borderColor: 'gray',
            color: 'black',
            display: 'flex', 
            alignItems: 'center', 
          }}
          onClick={handleClick} 
        >
          24h
          <ArrowDropDownIcon sx={{ ml: 1}} />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>12h</MenuItem>
          <MenuItem onClick={handleClose}>24h</MenuItem>
          <MenuItem onClick={handleClose}>48h</MenuItem>
        </Menu>
        <Button
          variant="outlined"
          sx={{
            ml: 2,
            borderColor: 'gray',
            color: 'black',
          }}
        >
          View All
        </Button>
      </Box>
      
      <Box sx={{ display: 'flex' }}>
        <TableContainer component={Paper} sx={{ mr: 6, boxShadow: 'none' }}>
          <Table sx={{ minWidth: 300, border: 'none' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ borderBottom: '2px solid #aeafbd' }}>
                <TableCell sx={{ border: 'none' }}>#</TableCell>
                <TableCell align="left" sx={{ border: 'none' }}>Alias</TableCell>
                <TableCell align="right" sx={{ border: 'none' }}>Price</TableCell>
                <TableCell align="right" sx={{ border: 'none' }}>Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leftSideData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell sx={{ border: 'none' }}>{item.id}</TableCell>
                  <TableCell align="left" sx={{ display: 'flex', alignItems: 'center', border: 'none' }}>
                    <img src="/asset/stock.png" alt="Stock" style={{ width: '40px', height: '40px', marginRight: '8px' }} />
                    {item.alias}
                  </TableCell>
                  <TableCell align="right" sx={{ border: 'none' }}>¥{item.price.toFixed(2)}</TableCell>
                  <TableCell align="right" sx={{ border: 'none' }}>〒{item.volume.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

=        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table sx={{ minWidth: 300, border: 'none' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ borderBottom: '2px solid #aeafbd' }}>
                <TableCell sx={{ border: 'none' }}>#</TableCell>
                <TableCell align="left" sx={{ border: 'none' }}>Alias</TableCell>
                <TableCell align="right" sx={{ border: 'none' }}>Price</TableCell>
                <TableCell align="right" sx={{ border: 'none' }}>Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rightSideData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell sx={{ border: 'none' }}>{item.id}</TableCell>
                  <TableCell align="left" sx={{ display: 'flex', alignItems: 'center', border: 'none' }}>
                    <img src="/asset/stock.png" alt="Stock" style={{ width: '40px', height: '40px', marginRight: '8px' }} />
                    {item.alias}
                  </TableCell>
                  <TableCell align="right" sx={{ border: 'none' }}>¥{item.price.toFixed(2)}</TableCell>
                  <TableCell align="right" sx={{ border: 'none' }}>〒{item.volume.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Trending;