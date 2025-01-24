import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Banner = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '50px 20px', background: 'linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)' }}>
      <Typography variant="h4">Send Cryptos to ElonMusk.aks</Typography>
      <Typography variant="body1" sx={{ margin: '20px 0' }}>
        Lorem ipsum dolor sit amet consectetur. Dicitum viverra psum elifend enim non mattis eu.
      </Typography>
      <TextField label="Find Your Name" variant="outlined" fullWidth sx={{ maxWidth: '400px', margin: '20px auto' }} />
      <Button variant="contained" color="primary">Search</Button>
    </Box>
  );
};

export default Banner;