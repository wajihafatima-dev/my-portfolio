import { Box } from "@mui/material";
import Image from "next/image";

const HeroImage = () => {
  return (
    <Box
      sx={{
        width: { xs: "130px", lg: "180px" },
        height: { xs: "130px", lg: "180px" }, 
        borderRadius: "50%", 
        position: "relative",
        overflow: "hidden", 
      }}
    >
      <Image
        src="/images/my-img.jpg" 
        alt="Hero Image"
        objectFit="fit" 
        style={{ position: "absolute", top: 0, left: 0 }} 
        width={300}
        height={100}
      />
    </Box>
  );
};

export default HeroImage;
