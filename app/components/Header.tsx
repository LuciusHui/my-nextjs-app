"use client";

import React from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

// Navigation buttons component
const ButtonGroup: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
    <Button 
      variant="text" 
      startIcon={<HomeIcon />} 
      sx={{ 
        marginRight: 2, 
        color: '#1e00a3', 
        borderColor: '#1e00a3', 
        '&:hover': { backgroundColor: '#e0e0e0' } 
      }} 
    >
      Market
    </Button>
    <Button 
      variant="contained" 
      sx={{ 
        backgroundColor: '#1e00a3', 
        '&:hover': { backgroundColor: '#002244' } 
      }} 
    >
      Launch App
    </Button>
  </div>
);

// Header component with transparent AppBar
const Header: React.FC = () => {  
  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  return (
    <AppBar position="absolute" sx={{ 
      top: 0, 
      left: 0, 
      right: 0, 
      backgroundColor: 'transparent', 
      boxShadow: 'none' 
    }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src="/asset/logo.png" alt="Logo" style={{ width: '200px' }} />
        <ButtonGroup />
        <IconButton 
          edge="end" 
          color="primary" 
          sx={{ ml: 2 }} 
          onClick={handleMenuClick} 
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;