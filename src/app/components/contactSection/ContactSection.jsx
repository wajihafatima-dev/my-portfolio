import React from "react";
import { Box, Grid, Container } from "@mui/material";
import ContactContent from "./contactContant";
import ContactForm from "./contactForm";

const ContactSection = () => {
  return (
    <Box
      id="contact"
      sx={(theme)=>({
        py: 16,
      })}
    >
      <Container maxWidth="lg">
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
