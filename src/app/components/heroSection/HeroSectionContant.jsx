import { Box, Typography } from "@mui/material";
import React from "react";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import DynamicButton from "../DynamicButton";

const HeroSectionContant = () => {
  return (
    <Box>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "-moz-initial",
          fontSize: "1.5rem",
          textAlign: "center",
          paddingY: 1,
        }}
      >
        Hi! I’m Wajiha Mukhtar
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "-moz-initial",
          fontSize: { md: 40, sm: 38, xs: 36 },
          textAlign: "center",
          paddingY: 1,
          color: "#36404a", 
          mb: 2 ,
          cursor:"pointer",
          "&:hover": {
            transform: "scale(1.04)", 
            transition: "all 0.3s ease",
          },
        }}
        fontWeight="bold"
      >
        Frontend Web Developer
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "-moz-initial",
          fontSize: "1rem",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        I am a dedicated Web Developer with expertise in HTML, CSS, JavaScript,
        React.js, and Next.js
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 3,
          flexWrap: "wrap",
        }}
      >
        <DynamicButton
        label={"Connect with me"}
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "auto" },
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "50px",
            paddingX: { xs: 2, sm: 4 },
            "&:hover": {
              backgroundColor: "#36404a",
              transform: "scale(1.05)", 
              transition: "all 0.3s ease",
            },
          }}
          href="mailto:wajihafatima689@gmail.com"
        />

        <DynamicButton
        label={"My Resume"}
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#000",
            backgroundColor:"#36404a",
            width: { xs: "100%", sm: "auto" },
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#adcced", 
              borderColor: "#333", 
              color:"#000",
              transform: "scale(1.05)", 
              transition: "all 0.3s ease",
            },
          }}
          href="/assets/myResume.pdf"
          download="myResume.pdf"
          endIcon={<SaveAltOutlinedIcon />}
        />
      </Box>
    </Box>
  );
};

export default HeroSectionContant;
