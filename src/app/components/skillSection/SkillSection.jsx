"use client";
import React, { useEffect } from "react";
import { Box, Typography, Card, Grid, CircularProgress } from "@mui/material";
import {
  blue,
  green,
  orange,
  pink,
  purple,
  teal,
  indigo,
  deepPurple,
} from "@mui/material/colors";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { TITLE_STYLE } from "@/app/constants/PAGE_CONSTANT";
// import ComputerIcon from "@mui/icons-material/Computer";
// import BrushIcon from "@mui/icons-material/Brush";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
// import CodeOffIcon from "@mui/icons-material/CodeOff";


// Circular progress with label inside

const page = ({data}) => {
  function CircularProgressWithLabel({ value, color }) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={value}
          size={90}
          thickness={5}
          sx={{ color }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" color="white" fontSize={18}>
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  const {cardData,styles,title}=data || {}
  return (
    <Box id="myskills" sx={styles.mainBox}>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        sx={TITLE_STYLE}
      >
       {title}
      </Typography>
     
      <Grid  container spacing={4} justifyContent="center">
        {cardData.map((skill, index) => (
          <Grid  item xs={10} sm={5} md={2.2} key={index}>
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Card
                // data-aos="zoom-in-up"
                // data-aos="fade-down"
                sx={{
                  backgroundColor: "#1e293b",
                  color: "white",
                  borderRadius: 4,
                  textAlign: "center",
                  py: 4,
                  px: 0,
                  border: `2px solid ${skill.color}`,
                  "&:hover": {
                    boxShadow: `0 0 20px 6px ${skill.color}`,
                  },
                }}
              >
                <CircularProgressWithLabel
                  value={skill.level}
                  color={skill.color}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mt: 2, mb: 1, color: skill.color }}
                >
                  {skill.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                  Proficiency: {skill.level}%
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default page;
