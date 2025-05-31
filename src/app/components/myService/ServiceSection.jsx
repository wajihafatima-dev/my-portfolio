"use client"
import {
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import DynamicCard from "../DynamicCard";
import { TITLE_STYLE } from "@/app/constants/PAGE_CONSTANT";
const ServiceSection = ({data}) => {
  const {icon,badgeColors,title,cardData,styles}=data || {}
  return (
    <Box id="myservices" sx={styles.mainBox}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={TITLE_STYLE}
      >
        {title}
      </Typography>
       <DynamicCard
        cardData={cardData}
        styles={styles}
        icon={icon}
        colors={badgeColors}
      />
    </Box>
  );
};

export default ServiceSection;
