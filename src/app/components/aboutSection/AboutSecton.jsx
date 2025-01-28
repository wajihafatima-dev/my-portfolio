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
        paddingY: { xs: 4, sm: 8 },
        paddingX: { xs: 2, sm: 4 },
      }}
      id="about"
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
          gap: 4,
          alignItems: "center",
        }}
      >
        {/* Resize the image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/my-img.jpg"
            width={200} // Adjust width
            height={200} // Adjust height
            alt="About Me"
            style={{
              objectFit: "cover", // Ensure the image scales nicely
            }}
          />
        </Box>
        <Box sx={{ textAlign: "left" }}>
          <AboutContant />
          <AboutCards />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
