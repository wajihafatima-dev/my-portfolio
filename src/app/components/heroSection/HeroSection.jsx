import { Box } from '@mui/material';
import React from 'react';
import HeroImage from './HeroImage';
import HeroSectionContant from './HeroSectionContant';

const HeroSection = () => {
  return (
    <Box sx={{ fontFamily: "-moz-initial" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <HeroImage />
      </Box>
     <HeroSectionContant/>
    </Box>
  );
};

export default HeroSection;
