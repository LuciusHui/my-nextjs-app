import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" color="primary">Akashic Domains</Typography>
        <Button variant="contained" color="primary">Market</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;