"use client";
import { Box } from "@mui/material";
import AboutContent from "./AboutContant";

const AboutSection = ({ data = {} }) => {
  const {
    title = "About Me",
    sections = [],
    styles = {},
  } = data;

  const {
    mainBox = {},
    gridBox = { display: "flex", gap: 2, flexWrap: "wrap" ,backgroundColor:"red"},
    imageStyle = { maxWidth: "100%", height: "auto", borderRadius: 4 },
  } = styles;

  return (
    <Box sx={mainBox} id="about">
      <Box sx={gridBox}>
        <Box
          component="img"
          src="/assets/about-img.png"
          alt={title || "About Image"}
          width={430}
          height={450}
          loading="lazy"
          sx={imageStyle}
        />
        <Box sx={{ overflow: "hidden", flex: 1 }}>
        <AboutContent sections={sections} styles={styles} title={title}/>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
