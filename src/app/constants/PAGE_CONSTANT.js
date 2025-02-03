//  background: "linear-gradient(to right, rgb(1 7 23), rgb(254 159 112))"
// background: linear-gradient(
//   to right,
//   #ec008c,#fc6767
// );
import { Box, Typography } from "@mui/material";
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaSass } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiMui, SiNextdotjs, SiTypescript } from "react-icons/si";

export const NAV_LINKS = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "MyServices",
    path: "#myservices",
  },
  {
    title: "MyWork",
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
          <Typography variant="h6" sx={{ mb: 1}}>
            Technical Skills
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 25}}>
            {[
              { name: "HTML5", icon: <FaHtml5 size={30} color="#E34F26" /> },
              { name: "CSS3", icon: <FaCss3Alt size={30} color="#1572B6" /> },
              { name: "JavaScript", icon: <FaJs size={30} color="#F7DF1E" /> },
              { name: "TypeScript", icon: <SiTypescript size={30} color="#3178C6" /> },
              { name: "React.js", icon: <FaReact size={30} color="#61DAFB" /> },
              { name: "Next.js", icon: <SiNextdotjs size={30} color="black" /> },
              { name: "Node.js", icon: <FaNodeJs size={30} color="#339933" /> },
              { name: "MongoDB", icon: <SiMongodb size={30} color="#47A248" /> },
              { name: "Git", icon: <FaGitAlt size={30} color="#F05032" /> },
              { name: "Tailwind CSS", icon: <SiTailwindcss size={30} color="#38B2AC" /> },
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
          <Typography variant="body1">ICS FROM WOMEN DEGREE COLLEGE, 2022</Typography>
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
export const SERVICE_DATA = {
    title: "My Services",
    description: "I am a frontend developer with expertise in HTML, CSS, JavaScript, React.js, and Next.js.",
    services: [
      {
        title: "Web Development",
        description: "Building responsive and dynamic web applications using modern technologies.",
      },
      {
        title: "Frontend Design",
        description: "Creating beautiful and user-friendly interfaces with React.js and Material-UI.",
      },
      {
        title: "Next.js Development",
        description: "Developing SEO-friendly and fast server-side rendered applications using Next.js.",
      },
      
    ],
  };
export const PROJECTS_DATA = [
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
  
  