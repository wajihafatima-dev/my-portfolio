"use client";
import { Box } from "@mui/material";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSecton";
import ProjectsSection from "./components/myProjects/ProjectSection";
import Sidebar from "./components/Sidebar";
import SkillSection from "./components/skillSection/SkillSection";
import { ABOUT_SECTION_DATA, PROJECT_SECTION_DATA, SERVICE_SECTION_DATA, SKILL_SECTION_DATA } from "./constants/PAGE_CONSTANT";
import ServiceSection from "./components/myService/ServiceSection";
// import ContactSection from "./components/contactSection/contactSection";
// import Footer from "./components/Footer"; // Uncomment if you have Footer

export default function Home() {
  return (
    <Box >
      <Box
        sx={{
          gap: { xs: 2, sm: 3, md:20 },
        }}
      >
        <HeroSection />
        <AboutSection data={ABOUT_SECTION_DATA}/>
        <SkillSection data={SKILL_SECTION_DATA}/> 
        <ServiceSection data={SERVICE_SECTION_DATA} />
        {/* <ProjectsSection data={PROJECT_SECTION_DATA}/> */}
        {/* <ContactSection /> */}
      </Box>

      {/* <Footer /> */}
    </Box>
  );
}
