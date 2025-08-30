//  background: "linear-gradient(to right, rgb(1 7 23), rgb(254 159 112))"
// background: linear-gradient(
//   to right,
//   #ec008c,#fc6767
// );
import { Box, lighten, Typography } from "@mui/material";
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
  cyan,
  lightBlue,
  lightGreen,
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
    path: "#myprojects",
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
        "Creating beautiful and user-friendly interfaces with React.js and Material-UI.",
    },
    {
      title: "Responsive UI",
      description:
        "Designing and coding responsive layouts that adapt seamlessly across all devices.",
    },
    {
      title: "Next.js Development",
      description:
        "Developing SEO-friendly and fast server-side rendered applications using Next.js.",
    },
    {
      title: "Performance Optimization",
      description:
        "Improving website speed, accessibility, and performance for a smooth user experience.",
    },
    {
      title: "API Integration",
      description:
        "Connecting frontend with REST APIs services for dynamic data handling.",
    },
    {
      title: "Version Control & Deployment",
      description:
        "Using Git/GitHub for code management and deploying applications on Vercel, Netlify, and other platforms.",
    },
  ],
  badgeColors: [
    teal[500],
    pink[500],
    yellow[700],
    blue[500],
    lightGreen[500],
    purple[400],
  ],
  icon: [
    "../assets/cod.png",
    "../assets/monitor.png",
    "../assets/react.png",
    "../assets/business.png",
    "../assets/api.png",
    "../assets/git.png",
  ],
  styles: {
    mainBox: {
      textAlign: "center",
      px: { xs: 3, md: 8 },
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
    cardIcon: {
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
      px: { xs: 2, md: 5 },
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
        "Hi! I’m Wajiha Mukhtar, a dedicated Frontend Developer with a passion for creating engaging, user-friendly, and innovative web solutions. My expertise includes modern web development tools like HTML, CSS, JavaScript, TypeScript, React, and Next.js, enabling me to bring ideas to life through beautifully designed and fully functional websites.",
    },
    {
      title: "Skills",
      content:
        "I am proficient in HTML, CSS, JavaScript, React.js, and Next.js. I specialize in building dynamic, responsive, and accessible web applications using modern frameworks and tools such as Tailwind CSS, Bootstrap, and Material-UI (MUI), ensuring clean design and seamless user experiences.",
    },
    {
      title: "About My Work",
      content:
        "As a Frontend Developer, I focus on writing clean, maintainable, and scalable code while ensuring that each project delivers an excellent user experience. I pay great attention to responsive design and performance optimization.",
    },
  ],
  styles: {
    mainBox: {
      color: "#000",
      minWidth: "100%",
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
      width: 40,
      height: 40,
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
  },
};
export const TITLE_STYLE = {
  background: "linear-gradient(to right, #ff00cc, #3333ff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
  py: 4,
};
export const PROJECT_SECTION_DATA = {
  title: "MY PROJECTS",
  cardData: [
    {
      image: "/images/counter.jpg",
      title: "Counter",
      description: "A simple and interactive counter app built with React.js.",
      projectLink: "https://counter-zeta-nine.vercel.app/",
    },
    {
      image: "/images/quiz.jpg",
      title: "Quiz App",
      description: "An engaging quiz application developed with Next.js.",
      projectLink: "https://quiz-app-two-kappa-43.vercel.app/quiz",
    },
    {
      image: "/images/todo.jpg",
      title: "Todo List",
      description: "A clean and efficient to-do list built with Next.js.",
      projectLink: "https://todo-app-two-theta-77.vercel.app/",
    },
    {
      image: "/images/recipe.jpg",
      title: "Recipe Finder",
      description:
      "Explore delicious recipes instantly with this Next.js recipe finder.",
      projectLink: "https://recipe-finder-lemon-mu.vercel.app/",
    },
    {
      image: "/images/welcome.png",
      title: "E-commerce",
      description:
      "Explore delicious food items with this Next.js e-commerce website.",
      projectLink: "https://e-commerce-xi-three-10.vercel.app/",
    },
    {
      image: "/images/dashboard.png",
      title: "Dashboard",
      description:
        "A user-friendly dashboard where users can log in, manage their profiles with an interface built using Next.js.",
      projectLink: "https://resourceinn.vercel.app/login",
    },
  ],

  badgeColors: [cyan[200], lightBlue[500], orange[700], lightGreen[600]],
};
export const projectSectionStyles = (theme) => ({
  cardStyle: {
    backgroundColor: theme.palette.mode === "dark" ? "#131722" : "#ffffff",
    borderRadius: "20px",
    color: theme.palette.mode === "dark" ? "#ffffff" : "#111",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: 250,
    height: "auto",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(8px)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    transition: "box-shadow 0.3s ease",
    padding: "3px",
  },
  cardImg: {
    width: "100%",
    height: "20vh",
    objectFit: "cover",
    objectPosition: "center",
  },
});

