// components/theme.js
import { createTheme, responsiveFontSizes } from '@mui/material';
import { getColors } from './colors';

export const getThemeOptions = (mode = "light") => {
  const colors = getColors(mode);

  return {
    palette: {
      mode,
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      background: {
        default: colors.background,
        paper: colors.surface,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
      card:{
      shadow:colors.cardShadow,
      },
      title:{
        color:colors.titleColor
      },
     heading:{
      color:colors.headingColor
     }
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 14,
      h1: {
        fontSize: "3rem",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontSize: "2.25rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: "1.875rem",
        fontWeight: 600,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 500,
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 500,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 500,
      },
      subtitle1: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 400,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: 300,
        color: colors.textSecondary,
      },
      button: {
        textTransform: "uppercase",
        fontWeight: 600,
        fontSize: "0.875rem",
      },
    },
  };
};
export const getResponsiveTheme = (mode = "light") =>
  responsiveFontSizes(createTheme(getThemeOptions(mode)));
// Light Theme
// let lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#1976d2",
//     },
//     secondary: {
//       main: "#ff4081",
//     },
//     background: {
//       default: "#f5f5f5",
//       paper: "#ffffff",
//     },
//     text: {
//       primary: "#000000",
//       gradient: "linear-gradient(to right, #000, #000)",
//     },
//     custom: {
//       serviceCard: {
//         backgroundColor: "#ffffff",
//         borderRadius: "20px",
//         color: "#000000",
//         textAlign: "center",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         minHeight: 250,
//         boxShadow: `0 0 12px 2px rgba(0, 0, 0, 0.1)`,
//         position: "relative",
//         overflow: "hidden",
//         transition: "all 0.3s ease-in-out",
//         "&:hover": {
//           boxShadow: `0 0 18px 4px rgba(25, 118, 210, 0.3)`, // subtle blue glow
//         },
//       },
//     },
//   },
//   typography,
// });
// lightTheme = responsiveFontSizes(lightTheme);

// // Dark Theme
// let darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#90caf9",
//     },
//     secondary: {
//       main: "#f48fb1",
//     },
//     background: {
//       default: "#181A2C",
//       paper: "#1e1e2f",
//     },
//     text: {
//       primary: "#ffffff",
//       gradient: "linear-gradient(to right, #ff00cc, #3333ff)",
//     },
//     custom: {
//       serviceCard: {
//         backgroundColor: "#131722",
//         borderRadius: "20px",
//         color: "#fff",
//         textAlign: "center",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         minHeight: 250,
//         boxShadow: `0 0 15px 4px rgba(0, 255, 255, 0.6)`,
//         position: "relative",
//         overflow: "hidden",
//         transition: "all 0.3s ease-in-out",
//         "&:hover": {
//           boxShadow: `0 0 20px 6px rgb(251, 192, 45)`,
//         },
//       },
//     },
//   },
//   typography,
// });
// darkTheme = responsiveFontSizes(darkTheme);

// // Export both
// export { lightTheme, darkTheme };
