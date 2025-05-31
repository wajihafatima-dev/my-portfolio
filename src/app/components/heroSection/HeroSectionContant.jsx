import { Box, Typography } from "@mui/material";
import React from "react";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import DynamicButton from "../DynamicButton";

const HeroSectionContant = () => {
  return (
    <Box sx={{width:"100%" }} >
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.5rem",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Hi! I’m Wajiha Mukhtar
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 34, sm: 38, md: 47 },
          textAlign: "center",
          paddingY: 2,
          color: "#e066ff",
         textShadow:"0 4px 15px #AD00B1"
        }}
        fontWeight="bold"
      >
        Frontend Web Developer
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: "1rem",
          textAlign: "center",
          display: "flex",
          color:"#fff",
          px:1,
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
          label={"My Resume"}
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#000",
            paddingX: { xs: 2, sm: 4, md: 6 },
            fontSize: { xs: 15, sm: 15, md: 18 },
            backgroundColor: "#A16BBE",
            width: { xs: "60%", sm: "auto" },
            borderRadius: "50px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.8)", 
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#e066ff",
              borderColor: "#333",
              color: "#000",
              transform: "scale(1.05)",
              boxShadow: "0 8px 20px rgba(224, 102, 255, 0.5)", 
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
