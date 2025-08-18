"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { TITLE_STYLE } from "@/app/constants/PAGE_CONSTANT";

const AboutContent = ({ title, sections = [], styles = {} }) => {
  const { iconBox = {} } = styles;

  return (
    <Box>
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ pl: { xs: 2, sm: 3 }, ...TITLE_STYLE }}
      >
        {title}
      </Typography>

      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            pl: 6,
            pb: 3,
          }}
        >
          <Box sx={{ position: "absolute", left: 0, top: 3, ...iconBox }}>
            <ShieldOutlinedIcon fontSize="medium" />
          </Box>

          <Box
            sx={(theme) => ({
              position: "absolute",
              left: { xs: 31, md: 18},
              top: 20,
              width: "0px", 
              height: "80%",
              borderLeft: `2px solid ${theme.palette.text.secondary}`,
            })}
          />
           <Box sx={{pl:2}}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={(theme) => ({
              background: theme.palette.title.color,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              mb: 2,
            })}
          >
            {section.title}
          </Typography>

          <Typography
            variant="body1"
            sx={(theme) => ({ color: theme.palette.text.secondary })}
          >
            {section.content}
          </Typography>
        </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AboutContent;
