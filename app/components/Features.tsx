import React from 'react';
import { Box, Typography } from '@mui/material';

const Features = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', margin: '20px 0' }}>
      <Typography variant="h5">Akashic Aliases</Typography>
      {/* Example Alias */}
      <Box sx={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
        <Typography variant="h6">Lorim ipsum</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur...</Typography>
      </Box>
      {/* Add more aliases here */}
    </Box>
  );
};

export default Features;