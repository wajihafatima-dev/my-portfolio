"use client";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import HeroImage from "./HeroImage";
import HeroSectionContant from "./HeroSectionContant";

const HeroSection = () => {
  return (
    <Box
      sx={{
      display: "flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent: "center",
      height: "90vh",
      }}
      // data-aos="fade-down"
    >
      <HeroImage />
      <HeroSectionContant/>
    </Box>
  );
};

export default HeroSection;
