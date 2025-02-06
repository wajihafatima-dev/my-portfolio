import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { SERVICE_DATA } from "../../constants/PAGE_CONSTANT";

const ServiceSection = () => {
  return (
    <Box
      id="myservices"
      data-aos="zoom-in-up"
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        pt: { xs: 4, sm: 12,md:20 },
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ color: "#333", mb: 2 }}>
        {SERVICE_DATA.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#555",
          maxWidth: "600px",
          mx: "auto",
          pb: 3,
        }}
      >
        {SERVICE_DATA.description}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {SERVICE_DATA.services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              data-aos="flip-left"
              sx={{
                minHeight: 180,
                borderRadius: 3,
                boxShadow: 6,
                background: "linear-gradient(135deg, #f8fafc, #e3e8ee)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 12,
                },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#007FFF" }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceSection;
