import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSecton";
import ServiceSection from "./components/myService/ServiceSection";
import ProjectsSection from "./components/myWork/ProjectSection";
import ContactSection from "./components/contactSection/contactSection";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{    backgroundImage: "url('/assets/blue.jpg')",
        backgroundSize: "cover",
        objectFit:"cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
         pt:{xs:8,sm:12,md:15}, mx: "auto", px: 4, py: 2 }}>
        <HeroSection />
       <AboutSection />
       <ServiceSection/>
       <ProjectsSection/>
       <ContactSection/>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
}
