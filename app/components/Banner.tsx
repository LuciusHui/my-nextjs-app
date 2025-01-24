"use client";

import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

const SearchIconButton = () => (
  <InputAdornment position="end">
    <Box 
      sx={{ 
        backgroundColor: 'rgb(13, 51, 162)',
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SearchIcon sx={{ color: 'white' }} />
    </Box>
  </InputAdornment>
);

const SearchBar = () => (
  <TextField 
    variant="outlined" 
    placeholder="Find Your Name" 
    sx={{ 
      width: '550px', 
      maxWidth: 410, 
      height: '57px',
      marginBottom: 2,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: '50px',
      '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '50px',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgba(63, 223, 235, 0.8)',
        },
        '&:hover fieldset': {
          borderColor: 'rgb(123, 135, 204)',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(25, 61, 172)',
        },
      },
    }}
    InputProps={{
      endAdornment: <SearchIconButton />,
    }}
  />
);

const Banner = () => {
  return (
    <Box sx={{ position: 'relative', height: 400, overflow: 'hidden' }}>
      <Image 
        src="/asset/Banner.png"
        alt="Banner" 
        layout="fill" 
        objectFit="cover" 
      />
      <Box 
        sx={{
          position: 'absolute',
          top: '90%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
        }}
      >
        <SearchBar />
      </Box>
    </Box>
  );
};

export default Banner;