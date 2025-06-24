import React from "react";
import { Card, CardContent, Typography, Button, Box, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperWrapper from "../SwiperWrapper";

// Project data with images and links


const ProjectSliderSection = ({data}) => {
  const {cardData,styles}=data || {}
  return (
    <Box sx={{  py: 6 ,px:{xs:1,md:6}}}>
    <SwiperWrapper cardData={cardData} styles={styles}/>
    </Box>
  );
};

export default ProjectSliderSection;
