import React from "react";
import { Card, CardContent, Typography, Button, Box, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperWrapper from "../SwiperWrapper";
import { TITLE_STYLE } from "@/app/constants/PAGE_CONSTANT";

// Project data with images and links


const ProjectSection = ({data}) => {
  const {cardData,styles}=data || {}
  return (
    <Box sx={{ py: 6, px: { xs: 1, md: 6 }, textAlign:"center"}}>
      <Typography variant="h2" fontWeight="bold" sx={TITLE_STYLE}>
        {title}
      </Typography>
      <SwiperWrapper cardData={cardData} styles={styles} />
    </Box>
  );
};

export default ProjectSection;
