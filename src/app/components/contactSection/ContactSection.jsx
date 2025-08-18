import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import ContactContent from "./contactContant";
import ContactForm from "./contactForm";

const ContactSection = () => {
  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        height:"100%",
        pb:5
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={(theme) => ({
              fontSize: { xs: 24, sm: 28, md: 32 },
              color: theme.palette.heading.color,
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                background: "linear-gradient(90deg, #A16BBE, #E066FF)",
                transform: "translateX(-50%)",
                width: "80%",
                height: "4px",
                borderRadius: "2px",
              },
            })}
          >
            Contact Me
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <ContactContent />
          <Grid item xs={12} md={5} justifyContent={"center"}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
