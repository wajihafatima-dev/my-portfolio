import { Box, Typography } from "@mui/material";
import React from "react";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { TITLE_STYLE } from "@/app/constants/PAGE_CONSTANT";

const AboutContant = ({ title, sections, styles }) => {
  const {
    sectionDescriptionStyle,
    sectionTitleStyle,
    verticalLineStyle,
    iconBox,
    titleStyle,
  } = styles || {};

  return (
    <Box data-aos="fade-left">
      <Typography variant="h4" fontWeight="bold" sx={TITLE_STYLE}>
        {title}
      </Typography>
      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            pl: 6,
          }}
        >
          <Box sx={iconBox}>
            <ShieldOutlinedIcon fontSize="small" />
          </Box>
          <Box sx={verticalLineStyle}></Box>
          <Typography variant="h5" fontWeight="bold" sx={sectionTitleStyle}>
            {section.title}
          </Typography>
          <Typography variant="body1" sx={sectionDescriptionStyle}>
            {section.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default AboutContant;
