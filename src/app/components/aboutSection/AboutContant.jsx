import { Box, Typography } from "@mui/material";
import React from "react";

const AboutContant = () => {
  return (
    <Box >
      <Typography variant="h4" fontWeight="bold" sx={{ color: "#333", mb: 2 ,textShadow: "2px 2px 8px #adcced",}}>
        About Me
      </Typography>
      <Typography variant="body1" gutterBottom>
      I am a dedicated Web Developer Proficient in HTML, CSS, JavaScript, React.js, and Next.js with
        extensive experience in building dynamic web applications and portals
      </Typography>
    </Box>
  );
};

export default AboutContant;
