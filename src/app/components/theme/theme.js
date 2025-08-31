import { createTheme, responsiveFontSizes } from "@mui/material";
import { getColors } from "./colors";

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
        bg: colors.bg,
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },
      card: {
        shadow: colors.cardShadow,
      },
      title: {
        color: colors.titleColor,
      },
      heading: {
        color: colors.headingColor,
      },
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

