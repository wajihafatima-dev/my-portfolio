"use client";
import { Box, Container } from "@mui/material";
import AboutContent from "./AboutContant";
import { motion } from "framer-motion";

const AboutSection = ({ data = {} }) => {
  const { title = "About Me", sections = [], styles = {} } = data;
  const {
    mainBox = {},
    gridBox = { display: "flex", gap: 2, flexWrap: "wrap" },
    imageStyle = { maxWidth: "100%", height: "auto", borderRadius: 4 },
  } = styles;

  return (
    <Container sx={mainBox} id="about">
      <Box sx={gridBox}>
        <Box
          component={motion.div}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          sx={{ pl: { sm: 0, md: 4 }, overflow: "hidden", flex: 1 }}
        >
          <AboutContent sections={sections} styles={styles} title={title} />
        </Box>
        <Box
          component={motion.img}
          src="/assets/code-bg.png"
          alt={title || "About Image"}
          width={350}
          height={350}
          loading="lazy"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          sx={(theme) => ({
            ...imageStyle,
            borderRadius: "50%",
            bgcolor: theme.palette.mode === "light" ? "#ffffff" : "#121212", // bg theme wise
            p: 1, // thoda padding dena for bg wrap feel
            animation: "smoothBounce 6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
            "@keyframes smoothBounce": {
              "0%, 100%": {
                transform: "translateY(0) scale(1)",
              },
              "50%": {
                transform: "translateY(-5px) scale(1.03)",
              },
            },
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05) rotate(2deg)",
            },
          })}
        />
      </Box>
    </Container>
  );
};

export default AboutSection;
