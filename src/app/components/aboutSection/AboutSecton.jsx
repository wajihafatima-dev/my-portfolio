import { Box } from "@mui/material";
import Image from "next/image";
import AboutContant from "./AboutContant";
import AboutCards from "./AboutCards";

const AboutSection = () => {
  return (
    <Box
      component="section"
      sx={{
        color: "#000",
        paddingTop: { xs: 4, sm:5 ,md:15}, 
      }}
      id="about"
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1fr 1.4fr", xs: "1fr" },
          alignItems: "center",
          paddingRight:{sm:0,md:16}
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-aos="flip-left"
        >
          <Image
            src="/images/my-img.jpg"
            width={250}
            height={200}
            alt="About Me"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>

        <Box sx={{ textAlign: "left", width: { xs: "100%", sm: "auto" } }}>
          <AboutContant />
          <AboutCards />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
