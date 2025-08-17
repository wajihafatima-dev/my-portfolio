import React from "react";
import { Typography, Box, useTheme, Container } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import SwiperWrapper from "../SwiperWrapper";
import {
  projectSectionStyles,
  TITLE_STYLE,
} from "@/app/constants/PAGE_CONSTANT";

const ProjectSection = ({ data }) => {
  const { title, cardData } = data || {};
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: "center",
        background:theme.palette.background.bg,
        paddingLeft: { xs: 3, md: 6 },
        paddingRight: { xs: 3, md: 6 },
      }}
    >
      <Typography variant="h2" fontWeight="bold" sx={TITLE_STYLE}>
        {title}
      </Typography>
      <SwiperWrapper cardData={cardData} styles={projectSectionStyles(theme)} />
    </Box>
  );
};

export default ProjectSection;
