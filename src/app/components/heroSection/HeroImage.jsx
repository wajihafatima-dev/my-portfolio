import { Box } from "@mui/material";
import Image from "next/image";

const HeroImage = () => {
  return (
      <Box
        sx={{
          width: {xs:130,md:150},
          height:  {xs:130,md:150},
          overflow: "hidden",
          mt:6,
          borderRadius: "50%",
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "scale(1.07)",
          },
        }}
      >
        <Image
          src="/assets/code-bg.png"
          alt="Hero Image"
          width={200}
          height={200}
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
