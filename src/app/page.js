"use client";
import { Box } from "@mui/material";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSecton";
import ProjectsSection from "./components/myProjects/ProjectSection";
import Sidebar from "./components/Sidebar";
import SkillSection from "./components/skillSection/SkillSection";
import { ABOUT_SECTION_DATA, SERVICE_SECTION_DATA, SKILL_SECTION_DATA } from "./constants/PAGE_CONSTANT";
import ServiceSection from "./components/myService/ServiceSection";
// import ContactSection from "./components/contactSection/contactSection";
// import Footer from "./components/Footer"; // Uncomment if you have Footer

export default function Home() {
  return (
    <Box >
      {/* <Sidebar /> */}
      <Box
        sx={{
          background:
            "linear-gradient(120deg, #000 0%, #301934 50%, #ff6ec4 100%)",
          gap: { xs: 2, sm: 3, md: 8 },
        }}
      >
        <HeroSection />
        <AboutSection data={ABOUT_SECTION_DATA}/>
        <SkillSection data={SKILL_SECTION_DATA}/> 
        <ServiceSection data={SERVICE_SECTION_DATA} />
        {/* <ProjectsSection /> */}
        {/* <ContactSection /> */}
      </Box>

      {/* <Footer /> */}
    </Box>
  );
}
