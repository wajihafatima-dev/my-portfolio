"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import DynamicCard from "../DynamicCard";
import { TITLE_STYLE } from "@/app/constants/PAGE_CONSTANT";
import { motion } from "framer-motion";
const ServiceSection = ({ data }) => {
  const { icon, badgeColors, title, cardData, styles } = data || {};
  return (
    <Box id="myservices" sx={styles.mainBox}>
      <Typography variant="h2" fontWeight="bold" sx={TITLE_STYLE}>
        {title}
      </Typography>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8    }}
        viewport={{ once: true }}
      >
        <DynamicCard
          cardData={cardData}
          styles={styles}
          icon={icon}
          colors={badgeColors}
        />
      </motion.div>
    </Box>
  );
};

export default ServiceSection;
