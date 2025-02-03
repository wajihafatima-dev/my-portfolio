"use client"
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import HeroImage from "./HeroImage";
import HeroSectionContant from "./HeroSectionContant";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{ fontFamily: "-moz-initial", marginBottom: { sm: 0, md: 2 } }}
        data-aos="fade-down"
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HeroImage />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <HeroSectionContant />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default HeroSection;
