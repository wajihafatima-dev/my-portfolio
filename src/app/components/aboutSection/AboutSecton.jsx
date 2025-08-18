"use client";
import { Box, Container } from "@mui/material";
import AboutContent from "./AboutContant";
import { motion } from "framer-motion";

const AboutSection = ({ data = {} }) => {
  const {
    title = "About Me",
    sections = [],
    styles = {},
  } = data;
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
          sx={{ pl: { sm: 0, md: 4 }, overflow: "hidden", flex: 1}}
        >
          <AboutContent sections={sections} styles={styles} title={title} />
        </Box>
        <Box
          component={motion.img}
          src="/assets/code-bg.png"
          alt={title || "About Image"}
          width={400}
          height={400}
          loading="lazy"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          sx={imageStyle}
        />
      </Box>
    </Container>
  );
};

export default AboutSection;
