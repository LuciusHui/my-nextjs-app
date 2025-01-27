"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AliasCard = ({ name, IconComponent }: { name: string; IconComponent: React.ElementType }) => (
  <Box sx={{
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px 32px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
    opacity: 0.8,
  }}>
    <Typography sx={{ fontWeight: '500', color: '#000', fontSize: '1.3rem' }}>{name}</Typography>
    <IconComponent sx={{ color: '#00bcd4', fontSize: '28px' }} />
  </Box>
);

const Features: React.FC = () => {
  return (
    <Box sx={{ 
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: { xs: '20px', sm: '40px' },
    }}>
      <Box sx={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr 1fr' },
        gap: { xs: 4, md: 8 },
        alignItems: 'center',
      }}>
        {/* Left Content */}
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 'bold',
            mb: 40,
            color: '#555',
          }}>
            Akashic Aliases
          </Typography>
          <Typography variant='h7' sx={{ 
            color: '#555',
            lineHeight: 1.6,
          }}>
            Lorem ipsum dolor sit amet consectetur. Sed leo vitae egestas neque nibh et. 
            Mattis ut sit diam adipiscing aliquet natoque in tincidunt tempus.
          </Typography>
        </Box>

        {/* Center Content */}
        <Box sx={{ 
          position: 'relative',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* Main gradient box */}
          <Box sx={{
            width: '350px',
            height: '450px',
            background: 'linear-gradient(135deg, #00bcd4 0%, #1e00a3 100%)',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}>
            <img 
              src="/asset/logo.png" 
              alt="Logo" 
              style={{ 
                width: '50%',
                height: 'auto',
              }} 
            />
          </Box>
          
          {/* Floating Cards */}
          <Box sx={{ 
            position: 'absolute',
            top: '55%',
            mr: 45,
            transform: 'translateX(-30%)',
            zIndex: 2,
          }}>
            <AliasCard name={"Loremip\nsum"} IconComponent={CheckCircleIcon} />
          </Box>
          
          <Box sx={{ 
            position: 'absolute',
            bottom: '50%',
            ml: 45,
            transform: 'translateX(20%)',
            zIndex: 2,
          }}>
            <AliasCard name={"Loremipsu\nmdsfew"} IconComponent={StarIcon} />
          </Box>
        </Box>

        {/* Right Content */}
        <Box sx={{ 
          bottom: '30%',
          textAlign: 'left',
          position: 'relative',
          zIndex: 5
        }}>
          <Typography variant='h7' sx={{ 
            color: '#555',
            lineHeight: 1.6,
          }}>
            Lorem ipsum dolor sit amet consectetur. Sed leo vitae egestas neque nibh et. 
            Mattis ut sit diam adipiscing aliquet natoque in tincidunt tempus.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;