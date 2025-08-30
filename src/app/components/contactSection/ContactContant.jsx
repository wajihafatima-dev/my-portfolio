import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactContant = () => {
  return (
      <Grid item xs={12} md={5} sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="h4" gutterBottom>
          Let's Connect
        </Typography>
        <Typography variant="body1" paragraph>
        I am currently looking for opportunities. Connect with me on LinkedIn, and I'll do my best to get back to you
        </Typography>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/wajiha-fatima-b42497346"
          target="_blank"
          sx={{
            backgroundColor: "#0077b5",
            color: "#fff",
            borderRadius: "20%",
            padding: "2px",
            "&:hover": { backgroundColor: "#005582" }
          }}
        >
          <LinkedInIcon sx={{ fontSize: 36 }} />
        </IconButton>
      </Grid>
  );
};

export default ContactContant;
