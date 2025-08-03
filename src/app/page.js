"use client";
import { Box } from "@mui/material";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSecton";
import SkillSection from "./components/skillSection/SkillSection";
import {
  ABOUT_SECTION_DATA,
  PROJECT_SECTION_DATA,
  SERVICE_SECTION_DATA,
  SKILL_SECTION_DATA,
} from "./constants/PAGE_CONSTANT";
import ServiceSection from "./components/myService/ServiceSection";
import ContactSection from "./components/contactSection/ContactSection";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", 
        gap: { xs: 3, sm: 5, md: 10 },
      }}
    >
      <HeroSection />
      <AboutSection data={ABOUT_SECTION_DATA} />
      <SkillSection data={SKILL_SECTION_DATA} />
      <ServiceSection data={SERVICE_SECTION_DATA} />
      <ContactSection />
    </Box>
  );
}
