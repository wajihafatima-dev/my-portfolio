import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
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
      spaceBetween={14}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      speed={1000}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {cardData?.map((item, index) => (
        <SwiperSlide
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: 0,
            paddingRight: 0,
          }}
          key={index}
        >
          <Card sx={styles.cardStyle}>
            <Box
              sx={{
                padding: "1rem",
              }}
            >
              <Box
                component="img"
                sx={styles.cardImg}
                src={item.image}
                alt={item.title}
              />
            </Box>
            <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    ...styles.cardtitle,
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }, 
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="gray"
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" }, 
                    lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
                    height:50,
                  }}
                >
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
