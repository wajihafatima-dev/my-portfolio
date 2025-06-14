//  background: "linear-gradient(to right, rgb(1 7 23), rgb(254 159 112))"
// background: linear-gradient(
//   to right,
//   #ec008c,#fc6767
// );
import { Box, Typography } from "@mui/material";
import {
  pink,
  yellow,
  purple,
  blue,
  orange,
  teal,
  deepPurple,
  green,
  indigo,
} from "@mui/material/colors";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

export const NAV_LINKS = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "My Services",
    path: "#myservices",
  },
  {
    title: "My Projects",
    path: "#mywork",
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
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 25 }}>
          {[
            { name: "HTML5", icon: <FaHtml5 size={30} color="#E34F26" /> },
            { name: "CSS3", icon: <FaCss3Alt size={30} color="#1572B6" /> },
            { name: "JavaScript", icon: <FaJs size={30} color="#F7DF1E" /> },
            {
              name: "TypeScript",
              icon: <SiTypescript size={30} color="#3178C6" />,
            },
            { name: "React.js", icon: <FaReact size={30} color="#61DAFB" /> },
            { name: "Next.js", icon: <SiNextdotjs size={30} color="black" /> },
            { name: "Node.js", icon: <FaNodeJs size={30} color="#339933" /> },
            { name: "MongoDB", icon: <SiMongodb size={30} color="#47A248" /> },
            { name: "Git", icon: <FaGitAlt size={30} color="#F05032" /> },
            {
              name: "Tailwind CSS",
              icon: <SiTailwindcss size={30} color="#38B2AC" />,
            },
            { name: "Material UI", icon: <SiMui size={30} color="#007FFF" /> },
            { name: "Sass", icon: <FaSass size={30} color="#CC6699" /> },
          ].map((skill, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              {skill.icon}
              <Typography variant="subtitle1">{skill.name}</Typography>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "education",
    content: (
      <Box>
        <Typography variant="body1">
          ICS FROM WOMEN DEGREE COLLEGE, 2022
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 14 }}>
          Intermediate in Computer Science
        </Typography>
      </Box>
    ),
  },
  {
    id: "certification",
    content: (
      <Box>
        <Typography variant="body1">JAWAN PAKISTAN INSTITUTE</Typography>
        <Typography variant="body1" sx={{ fontSize: 14 }}>
          Web and Mobile Application Development
        </Typography>
      </Box>
    ),
  },
];
export const SERVICE_SECTION_DATA = {
  title: "MY SERVICES",
  cardData: [
    {
      title: "Web Development",
      description:
        "Building responsive and dynamic web applications using modern technologies.",
    },
    {
      title: "Frontend Design",
      description:
        "Creating beautiful and user-friendly interfaces with React.js and Material-UI.",
    },
    {
      title: "Next.js Development",
      description:
        "Developing SEO-friendly and fast server-side rendered applications using Next.js.",
    },
    {
      title: "Accessibility Enhancement",
      description:
        "Making web applications accessible to everyone, regardless of their abilities.",
    },
  ],
  badgeColors: [pink[500], purple[500], yellow[700], blue[600]],
  icon: [
    "../assets/monitor.png",
    "../assets/code.png",
    "../assets/react.png",
    "../assets/business.png",
  ],
  styles: {
    mainBox: {
      textAlign: "center",
      background: "linear-gradient(to right, #1D2D3B, #000)",
      px: 6,
      pb: 5,
      height: "100%",
    },
    cardStyle: {
      backgroundColor: "#131722",
      borderRadius: "20px",
      color: "#fff",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: 250,
      boxShadow: `0 0 15px 4px rgba(0, 255, 255, 0.6)`,
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        boxShadow: `0 0 20px 6px rgb(251, 192, 45)`,
      },
    },
    cardImg: {
      width: 44,
      height: 44,
      mx: "auto",
      mb: 2,
    },
    cardTitle: {
      color: "#e066ff",
      mb: 1,
    },
  },
};
export const SKILL_SECTION_DATA = {
  title: "My Skills",
  cardData: [
    { title: "HTML", level: 85, color: orange[500] },
    { title: "CSS", level: 85, color: blue[500] },
    { title: "React.js", level: 85, color: teal[500] },
    { title: "Next.js", level: 85, color: deepPurple[500] },
    { title: "Node.js", level: 70, color: green[500] },
    { title: "MUI", level: 85, color: purple[500] },
    { title: "Bootstrap", level: 75, color: pink[400] },
    { title: "Tailwind", level: 75, color: indigo[500] },
  ],
  styles: {
    mainBox: {
      textAlign: "center",
      background: "linear-gradient(to right, #1D2D3B, #000)",
      px: 6,
      py: 5,
      height: "100%",
    },
    cardStyle: {
      backgroundColor: "#131722",
      borderRadius: "20px",
      color: "#fff",
      textAlign: "center",
      minHeight: 250,
      boxShadow: `0 0 15px 4px rgba(0, 255, 255, 0.6)`,
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        // transform: "translateY(-18px)",
        boxShadow: `0 0 20px 6px rgb(251, 192, 45)`,
      },
    },
    cardImg: {
      width: 44,
      height: 44,
      mx: "auto",
      mb: 2,
    },
    cardTitle: {
      color: "#e066ff",
      mb: 1,
    },
  },
};
export const ABOUT_SECTION_DATA = {
  title: "ABOUT ME",
  sections: [
    {
      title: "Introduction",
      content:
        "Hi! I’m Alishba, a dedicated Frontend Developer with a passion for creating engaging, user-friendly, and innovative web solutions. My expertise includes modern web development tools like HTML, CSS, JavaScript, TypeScript, React, and Next.js, enabling me to bring ideas to life through beautifully designed and fully functional websites.",
    },
    {
      title: "My Journey",
      content:
        "I began my journey into tech with a deep interest in designing and coding. Over the past year, I have been learning as a Senior Student at Governor's House, where I had the opportunity to gain hands-on experience in building responsive websites and dynamic applications.",
    },
    {
      title: "Skills",
      content:
        "I am proficient in HTML, CSS, JavaScript, React.js, and Next.js. I have extensive experience in building dynamic, high-performing, and accessible web applications using modern frameworks and tools.",
    },
  ],
  styles: {
    mainBox: {
      color: "#000",
      minWidth: "100%",
      height: "100%",
      py: 5,
    },
    gridBox: {
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      pl: { xs: 1, md: 0 },
      pr: { xs: 1, md: 10 },
    },
    imageStyle: {
      display: { xs: "none", md: "flex" },
      width: "auto",
      objectFit: "cover",
      transition: "transform 0.4s ease",
      "&:hover": {
        transform: "scale(1.07)",
      },
    },
    iconBox: {
      position: "absolute",
      left: { xs: 11, md: 0 },
      top: 0,
      width: 30,
      height: 30,
      borderRadius: "50%",
      backgroundColor: "#6755e4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      zIndex: 1,
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        animation: "uniqueSpin 0.7s ease-in-out",
      },
      "@keyframes uniqueSpin": {
        "0%": {
          transform: "rotate(0deg) scale(1)",
          boxShadow: "0 0 0px transparent",
        },
        "50%": {
          transform: "rotate(180deg) scale(1.15)",
          boxShadow: "0 0 8px #adcced",
        },
        "100%": {
          transform: "rotate(370deg) scale(1)",
          boxShadow: "0 0 0px transparent",
        },
      },
    },
    verticalLineStyle: {
      position: "absolute",
      left: { xs: 25, md: 13 },
      top: 20,
      width: 30,
      height: "80%",
      borderLeft: "3px solid #ffffff",
    },
    sectionTitleStyle: {
      background: "linear-gradient(to right, #7e61ff, #adcced)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
      mb: 1,
    },
    sectionDescriptionStyle: {
      fontSize: { xs: 14, sm: 16, md: 18 },
      color: "#fff",
      mb: 2,
      pr: { xs: 2, md: 0 },
    },
  },
};
export const PROJECTS_SECTION_DATA = [
  {
    title: "Project One",
    description: "Description of project one.",
    link: "https://project-one.com",
    imageUrl: "/images/picture.jpg",
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    link: "https://project-two.com",
    imageUrl: "",
  },
  {
    title: "Project One",
    description: "Description of project one.",
    link: "https://project-one.com",
    imageUrl: "/images/picture.jpg",
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    link: "https://project-two.com",
    imageUrl: "",
  },
];
export const TITLE_STYLE={
    background: "linear-gradient(to right, #ff00cc, #3333ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
      py: 5,
}