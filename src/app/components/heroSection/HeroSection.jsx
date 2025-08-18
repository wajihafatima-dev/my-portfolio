"use client";
import { Box } from "@mui/material";
import React from "react";
import "aos/dist/aos.css";
import HeroImage from "./HeroImage";
import HeroSectionContant from "./HeroSectionContant";

const HeroSection = () => {
  return (
    <Box
      id="herosection"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh", 
      }}
    >
      <HeroImage />
      <HeroSectionContant />
    </Box>
  );
};

export default HeroSection;
