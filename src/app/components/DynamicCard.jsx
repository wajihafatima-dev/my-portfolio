"use client";
import React from "react";
import { Grid, Card, Box, Typography } from "@mui/material";

const DynamicCard = ({ cardData, styles, icon, colors }) => {
  return (
    <Grid container spacing={5} justifyContent="center" >
      {cardData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card data-aos="flip-left" sx={styles.cardStyle}>
            <Box sx={{ px: 2, py: {xs:4,sm:0} }}>
              <Box
                component="img"
                src={icon[index]}
                alt="icon"
                sx={styles.cardImg}
              />
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={styles.cardTitle}
              >
                {item.title}
              </Typography>
              <Typography sx={{fontSize:17, color: "#c0c0c0" }}>
                {item.description}
              </Typography>
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: colors[index],
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                }}
              />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DynamicCard;
