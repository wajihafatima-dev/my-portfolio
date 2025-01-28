import AboutSecton from "./components/aboutSection/aboutSecton";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex  min-h-screen">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSecton />
        {/* <AchievementsSection />
        <ProjectsSection />
        <EmailSection /> */}
      </div>
      {/* <Footer /> */}
    </main>
  );
}