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
  ButtonGroup,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/navigation';

interface MarketItem {
  symbol: string;
  name: string;
  price: string;
  volume_24h: string;
  delta_24h: string;
  delta_1h: string;
  rank: number;
  icon?: string;
}

const Trending: React.FC = () => {
  const router = useRouter();
  const [marketData, setMarketData] = React.useState<MarketItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [timePeriod, setTimePeriod] = React.useState<'24h' | '1h'>('24h');

  // Fetch Market Data
  const fetchMarketData = async (period: '24h' | '1h') => {
    try {
      const response = await fetch(`/api/coins?period=${period}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.coins) {
        setMarketData(data.coins);
      } else {
        setError('Invalid data format received from API');
      }
    } catch (err) {
      console.error('API Error:', err);
      setError('Error fetching market data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchMarketData(timePeriod);
  }, [timePeriod]);

  // 10 coins total, 5 per side
  const leftSideData = marketData.slice(0, 5);
  const rightSideData = marketData.slice(5, 10);
  
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

  // View All Button Navigation
  const handleViewAll = () => {
    router.push('/market'); 
  };

  // Time Period Change
  const handleTimeChange = (newPeriod: '24h' | '1h') => {
    setTimePeriod(newPeriod);
  };

  //Define CSS for the market
  return (
    <Box sx={{ mt: 8, bgcolor: 'white', p: 3 }}>
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 2, 
          color: '#555',
          fontWeight: 'bold'
        }}
      >
        Market
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <ButtonGroup variant="outlined" sx={{ height: 36 }}>
          <Button
            sx={{
              backgroundColor: activeView === 'Trending' ? '#0088CC' : 'transparent',
              color: activeView === 'Trending' ? 'white' : '#555',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: activeView === 'Trending' ? '#0088CC' : 'transparent',
              }
            }}
            onClick={() => setActiveView('Trending')}
          >
            Trending
          </Button>
          <Button
            sx={{
              backgroundColor: activeView === 'Top' ? '#0088CC' : 'transparent',
              color: activeView === 'Top' ? 'white' : '#555',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: activeView === 'Top' ? '#0088CC' : 'transparent',
              }
            }}
            onClick={() => setActiveView('Top')}
          >
            Top
          </Button>
        </ButtonGroup>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowDownIcon sx={{ color: '#555' }} />}
            onClick={handleClick}
            sx={{
              textTransform: 'none',
              borderColor: '#E5E7EB',
              color: '#555',
              height: 36,
              '&:hover': {
                borderColor: '#E5E7EB',
                backgroundColor: 'transparent',
              }
            }}
          >
            {timePeriod}
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: 'none',
              borderColor: '#E5E7EB',
              color: '#555',
              height: 36,
              '&:hover': {
                borderColor: '#E5E7EB',
                backgroundColor: 'transparent',
              }
            }}
            onClick={handleViewAll}
          >
            View All
          </Button>
        </Box>
      </Box>

      {/* Time period menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
          }
        }}
      >
        <MenuItem 
          onClick={() => {
            handleTimeChange('1h');
            handleClose();
          }}
          sx={{ 
            minWidth: 100,
            color: '#555',
            '&:hover': { backgroundColor: '#f5f5f5' }
          }}
        >
          1h
        </MenuItem>
        <MenuItem 
          onClick={() => {
            handleTimeChange('24h');
            handleClose();
          }}
          sx={{ 
            minWidth: 100,
            color: '#555',
            '&:hover': { backgroundColor: '#f5f5f5' }
          }}
        >
          24h
        </MenuItem>
      </Menu>
      
      {/* Define CSS for Table */}
      <Box sx={{ display: 'flex' }}>
        <TableContainer component={Paper} sx={{ mr: 6, boxShadow: 'none' }}>
          <Table sx={{ minWidth: 300, border: 'none' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ borderBottom: '2px solid #aeafbd' }}>
                <TableCell sx={{ border: 'none', color: '#555' }}>#</TableCell>
                <TableCell align="left" sx={{ border: 'none', color: '#555' }}>Name</TableCell>
                <TableCell align="right" sx={{ border: 'none', color: '#555' }}>Price</TableCell>
                <TableCell align="right" sx={{ border: 'none', color: '#555' }}>Volume 24h</TableCell>
                <TableCell align="right" sx={{ border: 'none', color: '#555' }}>Change {timePeriod}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ color: '#555' }}>Loading...</TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ color: 'red' }}>{error}</TableCell>
                </TableRow>
              ) : (
                leftSideData.map((item) => (
                  <TableRow key={item.symbol}>
                    <TableCell sx={{ border: 'none', color: '#555' }}>{item.rank}</TableCell>
                    <TableCell align="left" sx={{ display: 'flex', alignItems: 'center', border: 'none', color: '#555' }}>
                      <img 
                        src={item.icon || `https://coinlib.io/static/img/coins/${item.symbol.toLowerCase()}.png`}
                        alt={item.symbol} 
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          marginRight: '8px',
                          borderRadius: '50%'  // Optional: if you want circular icons
                        }} 
                      />
                      {item.name}
                    </TableCell>
                    <TableCell align="right" sx={{ border: 'none', color: '#555' }}>${parseFloat(item.price).toFixed(2)}</TableCell>
                    <TableCell align="right" sx={{ border: 'none', color: '#555' }}>${parseFloat(item.volume_24h).toLocaleString()}</TableCell>
                    <TableCell align="right" sx={{ 
                      border: 'none',
                      color: parseFloat(timePeriod === '24h' ? item.delta_24h : item.delta_1h) >= 0 ? 'green' : 'red'
                    }}>
                      {parseFloat(timePeriod === '24h' ? item.delta_24h : item.delta_1h) >= 0 ? '+' : ''}
                      {timePeriod === '24h' ? item.delta_24h : item.delta_1h}%
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table sx={{ minWidth: 300, border: 'none' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ borderBottom: '2px solid #aeafbd' }}>
                <TableCell sx={{ border: 'none', color: '#555' }}>#</TableCell>
                <TableCell align="left" sx={{ border: 'none', color: '#555' }}>Name</TableCell>
                <TableCell align="right" sx={{ border: 'none', color: '#555' }}>Price</TableCell>
                <TableCell align="right" sx={{ border: 'none', color: '#555' }}>Volume 24h</TableCell>
                <TableCell align="right" sx={{ border: 'none', color: '#555' }}>Change {timePeriod}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ color: '#555' }}>Loading...</TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ color: 'red' }}>{error}</TableCell>
                </TableRow>
              ) : (
                rightSideData.map((item) => (
                  <TableRow key={item.symbol}>
                    <TableCell sx={{ border: 'none', color: '#555' }}>{item.rank}</TableCell>
                    <TableCell align="left" sx={{ display: 'flex', alignItems: 'center', border: 'none', color: '#555' }}>
                      <img 
                        src={item.icon || `https://coinlib.io/static/img/coins/${item.symbol.toLowerCase()}.png`}
                        alt={item.symbol} 
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          marginRight: '8px',
                          borderRadius: '50%'  // Optional: if you want circular icons
                        }} 
                      />
                      {item.name}
                    </TableCell>
                    <TableCell align="right" sx={{ border: 'none', color: '#555' }}>${parseFloat(item.price).toFixed(2)}</TableCell>
                    <TableCell align="right" sx={{ border: 'none', color: '#555' }}>${parseFloat(item.volume_24h).toLocaleString()}</TableCell>
                    <TableCell align="right" sx={{ 
                      border: 'none',
                      color: parseFloat(timePeriod === '24h' ? item.delta_24h : item.delta_1h) >= 0 ? 'green' : 'red'
                    }}>
                      {parseFloat(timePeriod === '24h' ? item.delta_24h : item.delta_1h) >= 0 ? '+' : ''}
                      {timePeriod === '24h' ? item.delta_24h : item.delta_1h}%
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Trending;