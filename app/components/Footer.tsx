"use client";

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'rgb(212, 234, 241)', padding: '40px 20px', marginTop: '40px' }}>
      <Grid container spacing={2}>

        {/* Logo Section */}
        <Grid item xs={6} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'left' }}>
            <img src="/asset/logo.png" alt="Akashic Domains" style={{ width: '200px', marginRight: '1px' }} />
          </Box>
        </Grid>

        {/* About Section */}
        <Grid item xs={2} md={2}>
          <Typography variant="h6" sx={{ textAlign: 'left' }}>ABOUT</Typography>
          <Box sx={{ textAlign: 'left' }}>
            <Link href="#brand" style={{ display: 'block', textDecoration: 'none', marginTop: '10px' }}>Brand</Link>
            <Link href="#community" style={{ display: 'block', textDecoration: 'none', marginTop: '10px' }}>Community</Link>
            <Link href="#whitepaper" style={{ display: 'block', textDecoration: 'none', marginTop: '10px' }}>WhitePaper</Link>
          </Box>
        </Grid>

        {/* Help Section */}
        <Grid item xs={2} md={2}>
          <Typography variant="h6" sx={{ textAlign: 'left' }}>HELP</Typography>
          <Box sx={{ textAlign: 'left' }}>
            <Link href="#customer-support" style={{ display: 'block', textDecoration: 'none', marginTop: '10px'  }}>Customer Support</Link>
            <Link href="#guides" style={{ display: 'block', textDecoration: 'none', marginTop: '10px'  }}>Guides</Link>
          </Box>
        </Grid>

        {/* Legal Section */}
        <Grid item xs={2} md={2}>
          <Typography variant="h6" sx={{ textAlign: 'left' }}>LEGAL</Typography>
          <Box sx={{ textAlign: 'left' }}>
            <Link href="#terms-of-use" style={{ display: 'block', textDecoration: 'none', marginTop: '10px'  }}>Terms of Use</Link>
            <Link href="#privacy-policy" style={{ display: 'block', textDecoration: 'none', marginTop: '10px'  }}>Privacy Policy</Link>
            <Link href="#disclaimer" style={{ display: 'block', textDecoration: 'none', marginTop: '10px'  }}>Disclaimer</Link>
          </Box>
        </Grid>
      </Grid>

      {/* Follow Us and Trademark Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ marginRight: '25px' }}>Follow us</Typography>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Link href="#twitter" style={{ textDecoration: 'none' }}>
              <Twitter />
            </Link>
            <Link href="#instagram" style={{ textDecoration: 'none' }}>
              <Instagram />
              </Link>
              <Link href="#facebook" style={{ textDecoration: 'none' }}>
              <Facebook />
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Trademark Notice */}
      <Box sx={{ textAlign: 'right', marginRight: '30px', marginTop: '20px', color: '#777' }}>
        <Typography variant="body2">©2024 Akashic, Inc.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;