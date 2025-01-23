import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Akashic</Typography>
        <Button color="inherit">Market</Button>
        <Button color="inherit">Launch App</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;