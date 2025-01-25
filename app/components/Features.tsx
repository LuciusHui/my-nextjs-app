"use client";

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const Feature = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: 0,
      backgroundColor: 'white', 
      boxShadow: 3,
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    }}>
      
      <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        <Image 
          src="/asset/Features.png"
          alt="Features"
          layout="fill"
          objectFit="fill"
        />
      </Box>
    </Box>
  );
};

export default Feature;