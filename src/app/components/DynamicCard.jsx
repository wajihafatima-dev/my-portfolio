"use client";
import React from "react";
import { Grid, Card, Box, Typography } from "@mui/material";

const DynamicCard = ({ cardData, styles, images, icon, colors }) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {cardData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={(theme) => ({
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.secondary,
              borderRadius: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: 250,
              boxShadow: theme.palette.card.shadow,
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: `0 0 18px 8px ${
                  theme.palette.mode === "dark"
                    ? "rgba(0, 255, 255, 0.6)"
                    : "rgba(25, 118, 210, 0.3)"
                }`,
              },
            })}
          >
            <Box sx={{ px: 2, py: { xs: 4, sm: 0 } }}>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Box
                    component="img"
                    src={
                      images && images[index]
                        ? images[index]
                        : icon && icon[index]
                        ? icon[index]
                        : ""
                    }
                    alt="visual"
                    sx={styles.cardImg}
                  />
                </a>
              ) : (images && images[index]) || (icon && icon[index]) ? (
                <Box
                  component="img"
                  src={images && images[index] ? images[index] : icon[index]}
                  alt="visual"
                  sx={styles.cardIcon}
                />
              ) : null}

              <Typography variant="h5" fontWeight="bold" sx={(theme)=>({color:theme.palette.heading.color})}>
                {item.title}
              </Typography>
              <Typography
                sx={(theme) => ({
                  fontSize: {xs:"12px",sm:"14px",md:"17px"},
                  py:1,
                  color:
                    theme.palette.mode === "dark" ? "#aaa" : "#666", 
                })}
              >
                {item.description}
              </Typography>

              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: colors?.[index] ?? "#1976d2",
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
