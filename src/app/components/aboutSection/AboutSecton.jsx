import { Box } from "@mui/material";
import AboutContant from "./AboutContant";

const AboutSection = ({ data }) => {
  const { title, sections, styles } = data || {};
  const { mainBox, gridBox, imageStyle } = styles || {};
  
  return (
    <Box sx={mainBox} id="about">
      <Box sx={gridBox}>
          <Box
            component="img"
            src="/assets/about-img.png"
            alt="About Me"
            width={450}
            height={450}
            sx={imageStyle}
          />
        <Box sx={{ overflow: "hidden"  }}>
            <AboutContant title={title} sections={sections} styles={styles} />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
