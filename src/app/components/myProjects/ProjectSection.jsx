import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { PROJECTS_SECTION_DATA } from "../../constants/PAGE_CONSTANT";
import DynamicButton from "../DynamicButton";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";

const ProjectsSection = () => {
  return (
    <Box
    data-aos="zoom-in-up"
    sx={{
      px: { xs: 2, sm: 4, md: 6 },
      textAlign: "center",
    }}
      id="mywork"
    >
      <Typography variant="h4" fontWeight="bold" sx={{ color: "#333", mb: 2 }}>
        My Work
      </Typography>
      <Typography variant="h7" paragraph sx={{ paddingBottom: 2 ,color: "#555"}}>
        Check out the projects I have worked on. Click on the project to view
        more details.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {PROJECTS_SECTION_DATA.map((project, index) => (
           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
             data-aos="zoom-in"
              sx={{
                width:"100%",
                margin: "auto",
                boxShadow: 3,
                backgroundImage: `url(${project.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: 1,
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 12,
                },
              }}
            >
              <CardContent
                sx={{
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  paddingBottom: 2,
                }}
              >
                <Typography variant="h6">{project.title}</Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginBottom: 2 }}
                >
                  {project.description}
                </Typography>
                <DynamicButton
                  label={"View Project"}
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  endIcon={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        width: 26,
                        height: 30,
                        boxShadow: 2,
                      }}
                    >
                      <NearMeRoundedIcon sx={{ fontSize: 18, color: "#000" }} />
                    </Box>
                  }
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "50px",
                    paddingX: { xs: 2, sm: 4 },
                    "&:hover": {
                      backgroundColor: "#333",
                      transform: "scale(1.05)",
                      transition: "all 0.3s ease",
                    },
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
