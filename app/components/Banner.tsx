"use client";

import React from 'react';
import { Box, TextField, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import GridViewIcon from '@mui/icons-material/GridView';

// Define CSS for the search icon
const SearchIconButton = () => (
  <InputAdornment position="end">
    <Box 
      sx={{ 
        backgroundColor: '#1e00a3',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SearchIcon sx={{ color: 'white', fontSize: '20px' }} />
    </Box>
  </InputAdornment>
);

// Define CSS for the search bar
const SearchBar = () => (
  <Box sx={{ 
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    mt: 4
  }}>
    <TextField 
      variant="outlined" 
      placeholder="Find Your Name" 
      sx={{
        width: '100%', 
        maxWidth: { xs: '100%', sm: '600px', md: '800px' },
        backgroundColor: 'white',
        borderRadius: '100px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '100px',
          height: { xs: '45px', sm: '55px' },
          '& fieldset': {
            borderColor: 'rgba(63, 223, 235, 0.8)',
            borderRadius: '100px',
          },
          '&:hover fieldset': {
            borderColor: 'rgb(123, 135, 204)',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#1e00a3',
          },
        },
      }}
      InputProps={{
        endAdornment: <SearchIconButton />,
      }}
    />
  </Box>
);

const StatBox = ({ icon: Icon, number, label }: { icon: any, number: string, label: string }) => (
  <Box sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    mb: { xs: 1, sm: 2 }
  }}>
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '12px',
        p: { xs: 0.5, sm: 1 },
        mr: { xs: 1, sm: 2 },
        width: { xs: '32px', sm: '40px' },
        height: { xs: '32px', sm: '40px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon sx={{ color: '#1e00a3', fontSize: { xs: '18px', sm: '24px' } }} />
    </Box>
    <Box>
      <Typography variant="h6" sx={{ 
        fontWeight: 'bold', 
        color: '#1e00a3', 
        mb: 0,
        fontSize: { xs: '1rem', sm: '1.25rem' }
      }}>
        {number}
      </Typography>
      <Typography variant="body2" sx={{ 
        color: '#666',
        fontSize: { xs: '0.75rem', sm: '0.875rem' }
      }}>
        {label}
      </Typography>
    </Box>
  </Box>
);

const Banner = () => {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box sx={{
        maxWidth: '1200px',
        width: '100%',
        padding: { xs: '20px', sm: '40px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
      }}>
        <Box sx={{ 
          width: '100%',
          display: 'flex',
          mb: 4
        }}>
          <Box sx={{ 
            flex: '0 0 66.666%',
            paddingRight: { xs: '20px', sm: '40px', md: '80px' },
            '& > *': {
              maxWidth: '100%'
            }
          }}>
            <Typography variant="h2" sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              '& .highlight': {
                color: '#00bcd4',
              }
            }}>
              Send Cryptos<br />
              to <span className="highlight">ElonMusk.aks</span>
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: 4, 
              color: '#666', 
              maxWidth: '600px',
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}>
              Lorem ipsum dolor sit amet consectetur. Dictum viverra tempor ipsum eleifend enim morbi non
              mattis at. Enim velit ornare egestas pellentesque id et.
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: { xs: '10px', sm: '20px' }
            }}>
              <StatBox icon={StarIcon} number="10,000" label="Registrations" />
              <StatBox icon={PersonIcon} number="1,000" label="Holders" />
              <StatBox icon={GridViewIcon} number="1,333,000" label="On-chain Transactions" />
            </Box>
          </Box>
          <Box sx={{ 
            flex: '0 0 33.333%',
            height: 'auto',
            position: 'relative',
            marginLeft: { xs: '-30px', sm: '-45px', md: '-60px' },
            display: { xs: 'none', md: 'block' }
          }}>
            <img 
              src="/asset/crypto.png" 
              alt="crypto" 
              style={{ 
                width: '100%',
                height: 'auto',
                maxHeight: '70vh',
                objectFit: 'contain'
              }} 
            />
          </Box>
        </Box>
        
        <SearchBar />
      </Box>
    </Box>
  );
};

export default Banner;