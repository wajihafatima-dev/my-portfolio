"use client";
import { Box } from "@mui/material";
import React from "react";
import "aos/dist/aos.css";
import HeroImage from "./HeroImage";
import HeroSectionContant from "./HeroSectionContant";
import { HERO_SECTION_DATA } from "@/app/constants/PAGE_CONSTANT";

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
      <HeroSectionContant data={HERO_SECTION_DATA}/>
    </Box>
  );
};

export default HeroSection;
