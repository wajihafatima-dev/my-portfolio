import { Box } from "@mui/material";
import Image from "next/image";

const HeroImage = () => {
  return (
      <Box
        sx={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          overflow: "hidden",
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "scale(1.07)",
          },
        }}
      >
        <Image
          src="/assets/about-img.png"
          alt="Hero Image"
          width={300}
          height={300}
          style={{
            objectFit: "fit",
            width: "100%",
            height: "100%",
          }}
        />
    </Box>
  );
};

export default HeroImage;
