"use client";
import React, { useState, useTransition } from "react";
import { Box, Grid, Typography } from "@mui/material";
import DynamicButton from "../DynamicButton";
import { TAB_DATA } from "../../constants/PAGE_CONSTANT";

const AboutCards = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <Box
      data-aos="fade-left"
      sx={{
        padding: { xs: 2, sm: 3, md: 3 },
        borderRadius: "15px",
        background: "linear-gradient(to bottom, #1c1c1c, #333333)",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        color: "#fff",
        maxWidth: "100%",
        margin: "auto",
      }}
    >
      <Grid container spacing={2} sx={{ justifyContent: "center"}}
      >
        {TAB_DATA.map(({ id }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <DynamicButton
              label={id.charAt(0).toUpperCase() + id.slice(1)}
              variant={tab === id ? "contained" : "outlined"}
              onClick={() => handleTabChange(id)}
              sx={{
                width: "100%",
                background: tab === id 
                  ? "linear-gradient(to right, #ADCCED, #adcced)"
                  : "linear-gradient(to right, #444, #666)",
                color: tab == id ?"#546373":"#fff",
                fontWeight: "bold",
                paddingX: { xs: 2, sm: 4, md: 6 },
                paddingY: { xs: 1, sm: 1.5 },
                borderRadius: "50px",
                boxShadow: tab === id ? "0px 6px 15px rgba(255, 255, 255, 0.2)" : "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  color:"#546373",
                  background: "linear-gradient(to right, #adcced,#adcced)",
                  boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          marginTop: { xs: 2, md: 3 },
          padding: { xs: 2, sm: 3 },
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        {TAB_DATA.find((item) => item.id === tab)?.content || null}
      </Box>
    </Box>
  );
};

export default AboutCards;
