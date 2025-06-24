"use client";
import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Grid,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { TITLE_STYLE } from "@/app/constants/PAGE_CONSTANT";

const SkillsSection = ({ data }) => {
  const theme = useTheme();
  const { cardData = [], title = "My Skills", styles = {} } = data || {};

  return (
    <Box id="myskills" sx={{ px: { xs: 2, md: 6 },  ...styles.mainBox }}>
      <Typography
        variant="h2"
        fontWeight="bold"
        align="center"
        sx={{ mb: 2, ...TITLE_STYLE }}
      >
        {title}
      </Typography>

      <Grid container sx={{px:{xs:3,md:10}}} spacing={6}>
        {cardData.map((skill, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 0.5,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {skill.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? "#333"
                        : "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: skill.color || theme.palette.primary.main,
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
