"use client";

import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

//Define CSS for the search icon
const SearchIconButton = () => (
  <InputAdornment position="end">
    <Box 
      sx={{ 
        backgroundColor: 'rgb(13, 51, 162)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SearchIcon sx={{ color: 'white', fontSize: '24px' }} />
    </Box>
  </InputAdornment>
);

//Define CSS for the search bar
const SearchBar = () => (
  <TextField 
    variant="outlined" 
    placeholder="Find Your Name" 
    sx={{
      mr:'500px', 
      width: '400%', 
      maxWidth:'650px',
      height: '55px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: '100px',
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

//Attach the background image from figma
const Banner = () => {
  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh',
      overflow: 'hidden' 
    }}>
      <Image
        src="/asset/Banner.png"
        alt="Banner" 
        fill
        style={{ objectFit: "fill" }}
      />
      <Box 
        sx={{
          position: 'absolute',
          top: '82.5%',
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