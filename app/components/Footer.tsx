import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f1f1f1', textAlign: 'center' }}>
      <Typography variant="body2">© 2024 Akashic, Inc.</Typography>
      <Box sx={{ marginTop: '10px' }}>
        <Link href="#" sx={{ margin: '0 10px' }}>About</Link>
        <Link href="#" sx={{ margin: '0 10px' }}>Help</Link>
        <Link href="#" sx={{ margin: '0 10px' }}>Legal</Link>
      </Box>
    </Box>
  );
};

export default Footer;