import { Box, Typography } from "@mui/material";
import React from "react";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import DynamicButton from "../DynamicButton";

const HeroSectionContant = ({data}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="body1"
        sx={(theme) => ({
          fontSize: "1.5rem",
          textAlign: "center",
          color: theme.palette.text,
        })}
      >
       {data.title}
      </Typography>
      <Typography
        sx={(theme)=>({
          fontSize: { xs: 34, sm: 38, md: 47 },
          textAlign: "center",
          paddingY: 2,
          color: theme.palette.heading.color,
        })}
        fontWeight="bold"
      >
        {data.title2}
      </Typography>
      <Typography
        variant="text"
        sx={(theme) => ({
          fontSize: "1rem",
          textAlign: "center",
          display: "flex",
          color: theme.palette.text,
          px: 1,
          justifyContent: "center",
        })}
      >
       {data.para}
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
            border: "2px solid transparent",
            paddingX: { xs: 2.5, sm: 4, md: 6 },
            fontSize: { xs: 13, sm: 13, md: 14 },
            width: { xs: "60%", sm: "auto" },
            borderRadius: "999px",
            backgroundImage: "linear-gradient(90deg, #A16BBE, #E066FF)",
            backgroundSize: "200% auto",
            boxShadow: "0 4px 12px rgba(161, 107, 190, 0.5)",
            transition: "all 0.4s ease-in-out",
            fontWeight: 600,
            letterSpacing: "0.5px",
            "&:hover": {
              backgroundPosition: "right center",
              transform: "translateY(-2px) scale(1.04)",
              boxShadow: "0 6px 18px rgba(224, 102, 255, 0.6)",
              color: "#120061",
              borderColor: "#fff",
            },
          }}
          href="/assets/wajiha_cv.pdf"
          download="myResume.pdf"
          endIcon={<SaveAltOutlinedIcon />}
        />
      </Box>
    </Box>
  );
};

export default HeroSectionContant;
