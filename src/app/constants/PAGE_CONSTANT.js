import { Typography } from "@mui/material";

export const NAV_LINKS = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];
 export const TAB_DATA = [
    {
      id: "skills",
      content: (
        <Typography variant="body1">
          I have expertise in JavaScript, React, Redux, Node.js, Express,
          PostgreSQL, Sequelize, HTML, CSS, and Git. My ability to build
          interactive and responsive web applications is one of my strengths.
        </Typography>
      ),
    },
    {
      id: "education",
      content: (
        <Typography variant="body1">
          Bachelor of Science in Computer Science from XYZ University.
        </Typography>
      ),
    },
    {
      id: "certifications",
      content: (
        <Typography variant="body1">
          Certified in Full-Stack Web Development by ABC Institute.
        </Typography>
      ),
    },
  ];