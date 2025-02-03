import { Box, Grid, TextField } from '@mui/material'
import React from 'react'
import DynamicButton from '../DynamicButton'

const ContactForm = () => {
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
    <Grid item xs={12} md={4}>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 ,alignItems:"center"}}>
            <TextField label="Your Name" variant="outlined" fullWidth required />
            <TextField label="Your Email" type="email" variant="outlined" fullWidth required />
            <TextField label="Your Message" variant="outlined" fullWidth multiline rows={2} required />
            <DynamicButton 
            label={"Submit"}
              variant="contained" 
              sx={{
                width: { xs: "100%", sm: "80%" },
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "50px",
                "&:hover": {
                  backgroundColor: "#333",
                  transform: "scale(1.05)", 
                  transition: "all 0.3s ease",
                },
              }}
            />
          </Box>
        </Grid>
        </Box>
  )
}

export default ContactForm
