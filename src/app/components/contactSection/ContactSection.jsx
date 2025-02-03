import React from "react";
import { Box, Grid} from "@mui/material";
import ContactContent from "./contactContant";
import ContactForm from "./contactForm";

const ContactSection = () => {
  return (
    <Box sx={{ paddingX: { xs: 1, sm: 5, md: 10 }, textAlign: "center",paddingTop: {md: 4, lg:20 },paddingBottom:{xs:4,sm:16} }}
    id="contact">
     <Grid container spacing={4} justifyContent="center" alignItems="center">
       <ContactContent/>
        <ContactForm/>
        </Grid>
    </Box>
  );
};
export default ContactSection;
