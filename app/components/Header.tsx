//handle user interactions such as clicks without any issues
"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  return (
    <AppBar position="absolute" sx={{ top: 0, left: 0, right: 0, backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" color="primary">Akashic Domains</Typography>
        
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
          <Button variant="text" startIcon={<HomeIcon />} sx={{ marginRight: 2, color: '#1e00a3', borderColor: '#1e00a3', '&:hover': { backgroundColor: '#e0e0e0' } }}>Market</Button>
          <Button variant="contained" sx={{ backgroundColor: '#1e00a3', '&:hover': { backgroundColor: '#002244' } }}>Launch App</Button>
        </div>
        
        <IconButton edge="end" color="primary" sx={{ ml: 2 }} onClick={() => console.log('Menu clicked')}aria-label="Menu"> <MenuIcon /></IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;