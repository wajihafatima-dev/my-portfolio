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
        <Box sx={{pl:{sm:0,md:4}, overflow: "hidden", flex: 1 }}>
        <AboutContent sections={sections} styles={styles} title={title}/>
        </Box>
        <Box
          component="img"
          src="/assets/code-bg.png"
          alt={title || "About Image"}
          width={400}
          height={400}
          loading="lazy"
          sx={imageStyle}
        />
      </Box>
    </Box>
  );
};

export default AboutSection;
