import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import DynamicButton from "./DynamicButton";

const SwiperWrapper = ({ cardData, styles }) => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      spaceBetween={20}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      speed={1000}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {cardData?.map((item, index) => (
        <SwiperSlide key={index}>
          <Card sx={styles.cardStyle}>
            <CardMedia
              component="img"
              height="190"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom color="white">
                {item.title}
              </Typography>
              <Typography variant="body2" color="gray">
                {item.description}
              </Typography>
              <Box mt={2}>
                <DynamicButton
                  href={item.projectLink}
                  target="_blank"
                  size="small"
                  label="View Project"
                  sx={{
                    color: "#fff",
                    borderColor: "#000",
                    paddingX: { xs: 2, sm: 4, md: 3 },
                    fontSize: { xs: 15, sm: 15, md: 16 },
                    backgroundColor: "#A16BBE",
                    width: { xs: "60%", sm: "auto" },
                    borderRadius: "50px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.8)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#e066ff",
                      borderColor: "#333",
                      color: "#000",
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 20px rgba(224, 102, 255, 0.5)",
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;
